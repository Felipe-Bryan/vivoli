import { Client } from '../../../types/Client';

export function clientRow(client: Client) {
  return `
<div class="row">
    <div class="col-12">${client.razao}</div>
    <div class="col-12">${client.cnpj}</div>
    <div class="col-6">${client.cidade}</div>
    <div class="col-6 text-end">
        <i class="bi bi-pencil-fill text-success p-1 px-2 manageClient" id="${client.id}"></i>
    </div>
    <hr class="m-0 my-1 p-0" />
</div>`;
}
