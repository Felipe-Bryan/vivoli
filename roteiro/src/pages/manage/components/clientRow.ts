import { Client } from '../../../types/Client';
import { maskCPF } from '../../../utils/masks';

export function clientRow(client: Client) {
  return `
<div class="border-top border-bottom bg-light px-1 mb-1">
  <div class="d-flex justify-content-between align-items-center">
    <div class="p-0 fw-bold w-75">${client.razao}</div>
    <div class="text-center location" id="location${client.id}">
      <i class="bi bi-geo-alt-fill text-primary p-1 px-3 fs-5"></i>
    </div>
  </div>
  <div class="d-flex justify-content-between align-items-center">
    <div class="w-75">
      <div class="p-0">${maskCPF(client.cnpj)}</div>
      <div class="p-0">${client.cidade}</div>
    </div>
    <div class="pe-1">
      <div class="text-center">
        <i
          class="bi bi-pencil-fill text-success p-1 px-2 manageClient"
          id="${client.id}"
          data-bs-toggle="modal"
          data-bs-target="#modal"></i>
      </div>
    </div>
  </div>
</div>`;
}
