import { Pedido } from '../types/Pedido';
import { Product } from '../types/Product';
import { maskDate } from '../utils/masks';

export function viewOrder(order: Pedido) {
  let line = `
<div class="d-flex justify-content-start m-0 mb-2 p-0 px-2">
    <button type="button" class="btn btn-primary p-1 px-2 mx-2" id="viewOrders">Voltar</button>
</div>

<div class="container" id="pageContent">
    <div class="row">
        <div class="col fw-bold fst-italic">${order.cliente}</div>
    </div>

    <div class="row mb-1">
        <div class="col fst-italic">${maskDate(order.data)}</div>
        <div class="col fst-italic text-center">${order.id}</div>
        <div class="col fst-italic text-end">R$ ${order.valor.toFixed(2)}</div>
    </div>

    <div class="row">
        <div class="col text-center fw-bold fst-italic fs-5 border-bottom border-dark mb-1">Itens do pedido</div>
    </div>
</div>`;

  return line;
}

function orderItem(produto: Product) {
  let line = `
  <div class="row">
    <div class="col fst-italic">Nome do produto</div>
  </div>
  
  <div class="row border-bottom border-dark mb-1">
    <div class="col-3">56 (2 cx)</div>
    <div class="col text-center">UN: R$ 15,00</div>
    <div class="col text-end">Total: R$ 150,00</div>
  </div>`;

  return line;
}
