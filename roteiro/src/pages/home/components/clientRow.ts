import { Client } from '../../../types/Client';

export function clientRow(client: Client) {
  return `
<div class="row px-1 border-top rounded">
    <div class="col-1 fs-5 p-0 px-1">${client.sequencia}</div>
    <div class="col-10 fs-5 p-0 px-1">${client.razao}</div>
    <div class="col-1 fs-4 p-0 ps-1" id="location-${client.id}"><i class="bi bi-geo-alt-fill text-primary"></i></div>
</div>

<div class="row px-1 border-bottom rounded mb-2">
    <div class="col fs-5 p-0 px-1 d-flex justify-content-end">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="check-${client.id}" />
        <label class="form-check-label" for="check-${client.id}">Atendido</label>
        </div>
    </div>
</div>`;
}
