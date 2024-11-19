import { clientLine } from '../components/clientLine';
import { Client } from '../types/Client';
import { removeInvalidChar } from '../utils/removeInvalidChar';
import { setClientFunctions } from './clientFunctions';

export function searchClient(value: string, clients: Client[], spot: HTMLElement) {
  const searchValue = removeInvalidChar(value);
  spot.innerHTML = '';

  if (searchValue.length === 0) {
    clients.forEach((client) => {
      spot.innerHTML += clientLine(client);
    });

    setClientFunctions(clients);
  } else {
    const filtered: Client[] = [];

    const idFound: Client[] = clients.filter((item) => {
      return removeInvalidChar(item.id).includes(searchValue);
    });

    idFound.forEach((item) => filtered.push(item));

    const nameFound: Client[] = clients.filter((item) => {
      return removeInvalidChar(item.nome).includes(searchValue);
    });

    nameFound.forEach((item) => filtered.push(item));

    const checked = new Set(filtered);

    checked.forEach((client) => {
      spot.innerHTML += clientLine(client);
    });

    setClientFunctions(clients);
  }
}
