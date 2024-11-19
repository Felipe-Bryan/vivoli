import { Client } from '../types/Client';

export function clientLine(client: Client) {
  return `
<div class="clientLine" id="client-${client.id}">
  <div class="row border-top">
    <div class="col fw-bold fst-italic">${client.nome}</div>
  </div>
  <div class="row border-bottom mb-1">
    <div class="col">${client.id}</div>
    <div class="col text-end mb-1">
      <button type="button" class="btn btn-success p-0 px-2 addOrder" id="addOrder-${client.id}">
        <i class="bi bi-plus"></i>
      </button>
      <button type="button" class="btn btn-primary p-0 px-2 viewAll" id="viewAll-${client.id}">
        <i class="bi bi-list-task"></i>
      </button>
      <button type="button" class="btn btn-danger p-0 px-2 del" id="del-${client.id}">
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>
  </div>
</div>`;
}
