import { setLocationBtns } from '../../functions/setLocationBtns';
import { Client } from '../../types/Client';
import { defineRoot } from '../../utils/defineRoot';
import { getLocation } from '../../utils/getLocation';
import { getSessionStorageData } from '../../utils/handleStorage';
import { removeInvalidChar } from '../../utils/removeInvalidChar';
import { setEventListener } from '../../utils/setButton';
import { clientRow } from './components/clientRow';
import { manageComponent } from './components/manageComponent';
import { deleteClient } from './deleteClient';
import { editClient } from './editClient';

export function startManage() {
  const clients: Client[] = getSessionStorageData('clients');
  getLocation();

  const root = defineRoot();

  root.innerHTML = manageComponent();

  const spot = document.getElementById('manageContent')!;
  spot.innerHTML = '';

  clients.forEach((client) => {
    spot.innerHTML += clientRow(client);
  });

  setEditBtns();
  setDeleteBtns();
  setLocationBtns();

  const totalSpot = document.getElementById('totalClients')!;
  totalSpot.innerHTML = `Total de clientes: ${clients.length}`;

  const searchIpt = <HTMLInputElement>document.getElementById('pesquisar-ipt')!;

  searchIpt.addEventListener('keyup', () => {
    const searchValue = removeInvalidChar(searchIpt.value);

    if (searchValue.length === 0) {
      spot.innerHTML = '';

      clients.forEach((client) => {
        spot.innerHTML += clientRow(client);
      });

      totalSpot.innerHTML = `Total de clientes: ${clients.length}`;

      setEditBtns();
      setDeleteBtns();
      setLocationBtns();
    } else {
      spot.innerHTML = '';

      const found: Client[] = [];

      const razaoFound: Client[] = clients.filter((item) => {
        return item.razao.includes(searchValue);
      });

      razaoFound.forEach((item) => found.push(item));

      const cpfFound: Client[] = clients.filter((item) => {
        return item.cpf.includes(searchValue);
      });

      cpfFound.forEach((item) => found.push(item));

      const cnpjFound: Client[] = clients.filter((item) => {
        return item.cnpj.includes(searchValue);
      });

      cnpjFound.forEach((item) => found.push(item));

      const cityFound: Client[] = clients.filter((item) => {
        return item.cidade.includes(searchValue);
      });

      cityFound.forEach((item) => found.push(item));

      const checked = new Set(found);

      checked.forEach((client) => {
        spot.innerHTML += clientRow(client);
      });

      totalSpot.innerHTML = `Total de clientes: ${checked.size}`;

      setEditBtns();
      setDeleteBtns();
      setLocationBtns();
    }
  });
}

function setEditBtns() {
  const editBtns = <NodeListOf<HTMLElement>>document.querySelectorAll('.manageClient');

  editBtns.forEach((btn) => {
    setEventListener(btn.id, 'click', () => editClient(btn.id));
  });
}

function setDeleteBtns() {
  const delBtns = <NodeListOf<HTMLElement>>document.querySelectorAll('.deleteClient');

  delBtns.forEach((btn) => {
    const id = btn.id.replace('del-', '');

    setEventListener(btn.id, 'click', () => deleteClient(id));
  });
}
