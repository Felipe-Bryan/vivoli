import { Client } from '../../../types/Client';
import { checkEvenWeek } from '../../../utils/checkEvenWeek';
import { getSessionStorageData } from '../../../utils/handleStorage';
import { setDiaSemana } from '../../../utils/semana';
import { clientRow } from './clientRow';

export function main() {
  const diaSemana = setDiaSemana();
  const clients: Client[] = getSessionStorageData('clients');
  const evenWeek: boolean = checkEvenWeek();

  const dayClients = clients.filter((item) => item.diaSemana === diaSemana);
  const todayClients: Client[] = [];

  dayClients.forEach((client) => {
    if (client.frequencia === 'S') {
      todayClients.push(client);
    }

    if (client.frequencia === 'A' && evenWeek === false) {
      todayClients.push(client);
    }

    if (client.frequencia === 'B' && evenWeek === true) {
      todayClients.push(client);
    }
  });

  let line = `
<div class="d-flex justify-content-around mb-2">
    <div class="fw-bold fs-4">${diaSemana}</div>
    <div class="fw-bold fs-4">Clientes: 0/${todayClients.length}</div>
</div>

<div class="container bg-light" id="mainContent">`;

  todayClients.forEach((client) => {
    line += clientRow(client);
  });

  line += `</div>`;

  return line;
}
