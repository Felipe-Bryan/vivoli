import { startHome } from '../pages/home';
import { Client } from '../types/Client';
import { saveToStorage } from '../utils/handleStorage';

export function setClientFunctions(clients: Client[]) {
  setDelete(clients);
  addNewOrder(clients);
}

function setDelete(clients: Client[]) {
  const deleteBtns = document.querySelectorAll('.del');

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const confirmation = confirm('Deseja deletar o cliente?');

      if (confirmation) {
        const client = clients.find((item) => item.id === btn.id.replace('del-', ''))!;

        const clientIndex = clients.indexOf(client);

        clients.splice(clientIndex, 1);

        saveToStorage('clients', clients);

        startHome();
      } else {
        return;
      }
    });
  });
}

function addNewOrder(clients: Client[]) {
  const newOrderBtns = document.querySelectorAll('.addOrder');

  newOrderBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const confirmation = confirm('Atribuir novo pedido ao cliente?');

      if (confirmation) {
        const client = clients.find((item) => item.id === btn.id.replace('addOrder-', ''))!;

        saveToStorage('selectedClient', client);

        const baseUrl = 'http://127.0.0.1:5500/';
        window.location.replace(`${baseUrl}?t=hist`);
      }
    });
  });
}
