import { Client } from '../../types/Client';
import { getSessionStorageData } from '../../utils/handleStorage';

export function editClient(id: string) {
  const clients: Client[] = getSessionStorageData('clients');

  const client = clients.find((item) => item.id === id);

  if (client) {
    console.log(client);
  } else {
    console.log('cliente não encontrado');
  }
}
