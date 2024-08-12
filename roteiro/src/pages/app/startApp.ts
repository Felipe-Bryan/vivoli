import { apiGet } from '../../service/api.service';
import { componentVisibility } from '../../utils/componentVisibility';
import { defineRoot } from '../../utils/defineRoot';
import { saveToSessionStorage } from '../../utils/handleStorage';
import { setButton } from '../../utils/setButton';
import { registerClient } from '../register/registerClient';

export async function startApp() {
  const root = defineRoot();

  root.innerHTML = `<p class="h5 mx-2">Aguarde, carregando dados do servidor...</p>`;

  // await apiGet()
  //   .then((data) => {
  //     saveToSessionStorage('clients', data.data);

  //     componentVisibility('menuBtn', 'show');

  //     setButton('home', () => startApp());
  //     setButton('newClient', () => registerClient());

  //     root.innerHTML = '';
  //   })
  //   .catch(() => {
  //     alert('Erro de comunicação com o servidor');
  //   });

  componentVisibility('menuBtn', 'show');

  setButton('home', () => startApp());
  setButton('newClient', () => registerClient());

  root.innerHTML = '';
}
