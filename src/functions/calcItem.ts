import { Order } from '../types/Order';
import { cashInfo } from '../utils/cashInfo';

export function calcItem(product: Order) {
  let value = 0;
  const spot = document.getElementById(`total${product.id}`)!;

  if (product.caixa === true) {
    value = product.qt * product.custo * product.caixaQt;
  } else {
    value = product.qt * product.custo;
  }

  const result = cashInfo(value);

  spot.innerHTML = result;

  return result;
}
