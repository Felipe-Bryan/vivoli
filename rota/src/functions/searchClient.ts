import { locationFound } from '../components/locationFound';
import { locationNotFound } from '../components/locationNotFound';
import { Client } from '../types/Client';
import { getSessionStorageData } from '../utils/handleStorage';

export async function searchClient(cnpj: string) {
  const clients: Client[] = getSessionStorageData('clients');

  const clientFound = clients.find((item) => item.cnpj === cnpj);

  if (clientFound === undefined) {
    locationNotFound();

    return;
  } else {
    locationFound(clientFound);
  }
}
