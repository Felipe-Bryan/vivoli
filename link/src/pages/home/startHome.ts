import { Root } from '../../components/base-components/Root';
import { setCopyBtn } from '../../functions/setCopyBtn';
import { setSpotValue } from '../../functions/setSpotValue';
import { getStorageData, saveToStorage } from '../../utils/handleStorage';
import { homeComponent } from './homeComponent';

export const url = 'https://vivoli.vercel.app';

export function startHome() {
  Root.innerHTML = homeComponent();

  const telIpt = <HTMLInputElement>document.getElementById('tel')!;

  const savedTel = getStorageData('tel');

  if (savedTel) {
    telIpt.value = savedTel;
  }

  const links = document.querySelectorAll('.link');

  if (telIpt.value != '') {
    setSpotValue(links, telIpt.value);
  }

  telIpt.addEventListener('keyup', () => {
    setSpotValue(links, telIpt.value);

    saveToStorage('tel', telIpt.value);
  });

  const copyBtns = <NodeListOf<HTMLButtonElement>>document.querySelectorAll('.copyBtn');

  setCopyBtn(copyBtns);
}
