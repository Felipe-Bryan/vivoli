import { Pedido } from '../types/Pedido';
import { maskDate } from '../utils/masks';

export function orderLine(pedido: Pedido) {
  return `
        <div class="verPedido" id="${pedido.id}">
          <div class="row border-top">
            <div class="col-12">${pedido.cliente}</div>
          </div>
          <div class="row border-bottom mb-1">
            <div class="col-3 text-center">${maskDate(pedido.data)}</div>
            <div class="col-2">${pedido.id}</div>
            <div class="col-4">R$ ${pedido.valor.toFixed(2)}</div>
            <div class="col-3 text-end p-0 mb-1">
              <button type="button" class="btn btn-danger p-0 px-2 del" id="del-${pedido.id}">
                <i class="bi bi-trash3-fill"></i>
              </button>
              <button type="button" class="btn btn-primary p-0 px-2 view" id="view-${pedido.id}">
                <i class="bi bi-eye-fill"></i>
              </button>
            </div>
          </div>
        </div>`;
}
