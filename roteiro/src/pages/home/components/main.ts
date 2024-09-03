import { Client } from '../../../types/Client';
import { getSessionStorageData } from '../../../utils/handleStorage';
import { setDiaSemana } from '../../../utils/semana';
import { clientRow } from './clientRow';

export function main() {
  const diaSemana = setDiaSemana();
  const clients: Client[] = getSessionStorageData('clients');

  const todayClients = clients.filter((item) => item.diaSemana === diaSemana);

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
