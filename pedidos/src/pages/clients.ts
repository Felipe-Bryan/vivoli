import { clientsHeader } from '../components/clientsHeader';
import { registerClient } from '../functions/registerClient';
import { root } from '../utils/root';
import { startHome } from './home';

export function startClients() {
  root.innerHTML = clientsHeader();

  const homeBtn = document.getElementById('home')!;

  homeBtn.addEventListener('click', () => {
    startHome();
  });

  const newClientBtn = document.getElementById('newClient')!;

  newClientBtn.addEventListener('click', () => {
    registerClient();
  });
}
