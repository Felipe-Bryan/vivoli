import { homeHeader } from '../components/homeHeader';
import { modal } from '../components/modal';
import { root } from '../utils/root';
import { startClients } from './clients';

export function startHome() {
  root.innerHTML = homeHeader();

  const filterBtn = document.getElementById('filter')!;

  filterBtn.addEventListener('click', () => {
    modal({
      label: 'Filtros',
      body: 'Conteúdo',
      footer: 'Botões',
    });
  });

  const viewClientsBtn = document.getElementById('viewClients')!;

  viewClientsBtn.addEventListener('click', () => {
    startClients();
  });
}
