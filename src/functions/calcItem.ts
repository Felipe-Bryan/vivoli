import { Order } from '../types/Order';

export function calcItem(product: Order) {
  let value = 0;
  const spot = document.getElementById(`total${product.id}`)!;

  if (product.caixa === true) {
    value = product.qt * product.custo * product.caixaQt;
  } else {
    value = product.qt * product.custo;
  }

  spot.innerHTML = `R$ ${value.toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
