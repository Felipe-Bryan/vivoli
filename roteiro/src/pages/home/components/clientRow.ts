import { Client } from '../../../types/Client';
import { getTodayString } from '../../../utils/getTodayString';
import { reverseCalcSequencia } from '../../register/calcSequencia';

export function clientRow(client: Client) {
  const today = getTodayString();

  return `
<div class="row px-1 border-top rounded">
    <div class="col-1 p-0 px-1">${reverseCalcSequencia(client)}</div>
    <div class="col-10 p-0 px-1 fw-bold text-center">${client.fantasia}</div>
    <div class="col-1 p-0 ps-1 location" id="location${client.id}">
        <i class="bi bi-geo-alt-fill text-primary"></i>
    </div>
</div>

<div class="row px-1">
    <div class="col-2 p-0 px-1 fw-bold">Razão:</div>
    <div class="col p-0 ps-2">${client.razao}</div>
</div>

<div class="row px-1 border-bottom rounded mb-2">
    <div class="col-6">
        <i 
            class="bi bi-ban text-danger fw-bold"
            ${client.bloqueado ? '' : `style="display: none !important"`}> Bloqueado</i>
    </div>
    <div class="col-6 p-0 px-1 d-flex justify-content-end">
        <div class="form-check">
            <input 
                class="form-check-input"
                type="checkbox" 
                value="" 
                id="check-${client.id}" 
                ${client.atendido === today ? 'checked' : ''}/>
            <label class="form-check-label" for="check-${client.id}">Atendido</label>
        </div>
    </div>
</div>`;
}
