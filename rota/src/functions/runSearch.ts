import { locationFound } from '../components/locationFound';
import { locationNotFound } from '../components/locationNotFound';
import { Client } from '../types/Client';
import { Vendedor } from '../types/Vendedor';
import { getSessionStorageData } from '../utils/handleStorage';

export function runSearch(info: string) {
  const clients: Client[] = getSessionStorageData('clients');

  if (info.length === 11) {
    const clientFound = clients.find((item) => item.cpf === info);

    if (clientFound) {
      locationFound(clientFound);
    } else {
      locationNotFound();
    }
  } else if (info.length === 14) {
    const clientFound = clients.find((item) => item.cnpj === info);

    if (clientFound) {
      locationFound(clientFound);
    } else {
      locationNotFound();
    }
  } else {
    locationNotFound();
  }
}
