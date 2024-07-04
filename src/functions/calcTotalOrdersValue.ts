import { Order } from '../types/Order';
import { cashInfo } from '../utils/cashInfo';

export function calcTotalvalueOrders(orders: Order[]) {
  const spot = document.getElementById('totalOrderValue')!;
  let total = 0;

  orders.forEach((order) => {
    if (order.caixa === true) {
      total += order.caixaQt * order.custo * order.qt;
    } else {
      total += order.qt * order.custo;
    }
  });

  spot.innerHTML = cashInfo(total);
}
