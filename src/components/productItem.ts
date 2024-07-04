import { Order } from '../types/Order';
import { calcBoxValue } from '../utils/calcBoxValue';
import { calcPercent } from '../utils/calcPercent';

export function productItem(order: Order) {
  let line = `
<div class="container-fluid border-bottom border-2 mb-2">
    <div class="row">
        <div class="col p-0 fw-semibold fst-italic">${order.nome}</div>
    </div>

    <div class="row">
        <div class="p-0 m-0 col-2">Custo</div>
        <div class="p-0 m-0 col-3 text-center">R$ ${order.custo}</div>
        <div class="p-0 m-0 col-3">Sugerido</div>
        <div class="p-0 m-0 col-4 text-end">R$ ${order.sugestao.toFixed(2)} (${calcPercent(order)}%)</div>
    </div>`;

  if (order.caixa === true) {
    line += `
    <div class="row">
        <div class="p-0 m-0 col-6">Caixa com: <span>${order.caixaQt}</span></div>
        <div class="p-0 m-0 col-6 text-end">R$ <span id="valorCaixa">${calcBoxValue(order).toFixed(2)}</span></div>
      </div>`;
  }

  line += `
      <div class="row">
        <div class="p-0 m-0 col-9 d-flex justify-content-end pe-2">Total Item:</div>
        <div class="p-0 m-0 col-3 text-end"><span id="total${order.id}">R$ 0,00</span></div>
      </div>  
  
      <div class="row d-flex align-items-center justify-content-end my-1">
        <div class="col-3 col-sm-1 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-danger removeBtn" id="remove${order.id}"><i class="bi bi-dash"></i></button>
        </div>

        <div class="col-3 col-sm-1 text-center" id="orderQt${order.id}">${order.qt}</div>

        <div class="col-3 col-sm-1 d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-success addBtn" id="add${order.id}"><i class="bi bi-plus"></i></button>
        </div>
    </div>
</div>`;

  return line;
}
