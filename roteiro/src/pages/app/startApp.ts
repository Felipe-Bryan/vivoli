import { mainComponent } from '../../components/mainComponent';
import { apiGet } from '../../service/api.service';
import { Vendedor } from '../../types/Vendedor';
import { componentVisibility } from '../../utils/componentVisibility';
import { getStorageData, saveToSessionStorage } from '../../utils/handleStorage';
import { setButton } from '../../utils/setButton';
import { registerClient } from '../register/registerClient';

export async function startApp() {
  const root = document.getElementById('root')!;

  root.innerHTML = `<p class="h5 mx-2">Aguarde, carregando dados do servidor...</p>`;

  const user: Vendedor = getStorageData('user');

  await apiGet(`client/setor/${user.setor}`)
    .then((data) => {
      saveToSessionStorage('clients', data.data);

      root.innerHTML = mainComponent();

      setButton('home', () => startApp());
      setButton('newClient', () => registerClient());
    })
    .catch(() => {
      alert('Erro de comunicação com o servidor');
    });
}
