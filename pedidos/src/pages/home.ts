import { clientLine } from '../components/clientLine';
import { homeHeader } from '../components/homeHeader';
import { modal } from '../components/modal';
import { setClientFunctions } from '../functions/clientFunctions';
import { registerClient } from '../functions/registerClient';
import { searchClient } from '../functions/searchClient';
import { Client } from '../types/Client';
import { getStorageData } from '../utils/handleStorage';
import { root } from '../utils/root';
// import { startClients } from './clients';

export function startHome() {
  root.innerHTML = homeHeader();

  const pageContent = document.getElementById('pageContent')!;
  pageContent.innerHTML = '';

  const clients: Client[] = getStorageData('clients') || [];

  clients.forEach((client) => {
    pageContent.innerHTML += clientLine(client);
  });

  setClientFunctions(clients);

  const searchIpt = <HTMLInputElement>document.getElementById('searchIpt')!;

  searchIpt.addEventListener('keyup', () => {
    searchClient(searchIpt.value, clients, pageContent);
  });

  const registerBtn = document.getElementById('register')!;

  registerBtn.addEventListener('click', () => {
    registerClient();
  });

  // const filterBtn = document.getElementById('filter')!;

  // filterBtn.addEventListener('click', () => {
  //   modal({
  //     label: 'Filtros',
  //     body: 'Conteúdo',
  //     footer: 'Botões',
  //   });
  // });

  // const viewClientsBtn = document.getElementById('viewClients')!;

  // viewClientsBtn.addEventListener('click', () => {
  //   startClients();
  // });

  // const newOrderBtn = document.getElementById('newOrder')!;

  // newOrderBtn.addEventListener('click', () => {
  //   const baseUrl = 'http://127.0.0.1:5500/';
  //   window.location.replace(`${baseUrl}?t=hist`);
  // });
}
