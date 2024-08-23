import { mainComponent } from '../../components/mainComponent';
import { logout } from '../../functions/logout';
import { apiGet } from '../../service/api.service';
import { Vendedor } from '../../types/Vendedor';
import { getStorageData, saveToSessionStorage } from '../../utils/handleStorage';
import { setButton } from '../../utils/setButton';
import { startManage } from '../manage/startManage';
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
      setButton('manageClient', () => startManage());
      setButton('logout', () => logout());
    })
    .catch(() => {
      alert('Erro de comunicação com o servidor');
    });
}
