import { setLocationBtns } from '../../functions/setLocationBtns';
import { apiPut } from '../../service/api.service';
import { defineRoot } from '../../utils/defineRoot';
import { getTodayString } from '../../utils/getTodayString';
import { main } from './components/main';

export function startHome() {
  const root = defineRoot();

  root.innerHTML = main();

  setLocationBtns();

  console.log(getTodayString());

  const checkClient = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.check');

  checkClient.forEach((box) => {
    box.addEventListener('change', async () => {
      const id = box.id.replace('check-', '');
      const checked = box.checked;

      if (checked === true) {
        await apiPut(`client/${id}`, { atendido: getTodayString() });
      } else {
        await apiPut(`client/${id}`, { atendido: '-' });
      }
    });
  });
}
