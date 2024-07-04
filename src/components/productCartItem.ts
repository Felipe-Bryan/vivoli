import { Order } from '../types/Order';
import { cashInfo } from '../utils/cashInfo';

export function productCartItem(order: Order) {
  let itemTotal = 0;

  if (order.caixa === true) {
    itemTotal = order.qt * order.caixaQt * order.custo;
  } else {
    itemTotal = order.qt * order.custo;
  }

  let line = `
<div class="row border-bottom border-top border-black bg-light px-1">
    <div class="m-0 p-0 col-6">${order.nome}</div>`;

  if (order.caixa === true) {
    line += `<div 
                class="m-0 p-0 col-3
                text-center"> <span id="cartQt${order.id}">${order.qt * order.caixaQt} - ${order.qt}</span> cx</div>`;
  } else {
    line += `
    <div class="m-0 p-0 col-3 text-center" >
        <span id="cartQt${order.id}">${order.qt}</span> un
    </div>`;
  }

  line += `<div class="m-0 p-0 col-3 text-end" id="cartValue${order.id}">${cashInfo(itemTotal)}</div>

    <div class="col d-flex justify-content-end mb-1" id="productBtns">
        <button type="button" class="btn btn-danger p-0 m-0 mx-2 px-2 removeCartOrder" id="removeCart${order.id}">
          <i class="bi bi-dash"></i>
        </button>
        <button type="button" class="btn btn-success p-0 m-0 mx-2 px-2 addCartOrder" id="addCart${order.id}">
          <i class="bi bi-plus"></i>
        </button>
    </div>
</div>`;

  return line;
}
