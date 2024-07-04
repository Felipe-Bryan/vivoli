import { calcTotalvalueOrders } from '../functions/calcTotalOrdersValue';
import { Order } from '../types/Order';
import { cashInfo } from './cashInfo';

export function textGenerate(order: Order[]) {
  let line = '';
  let value = 0;

  order.forEach((item) => {
    if (item.qt > 0) {
      if (item.caixa === true) {
        value = item.caixaQt * item.custo * item.qt;
      } else {
        value = item.qt * item.custo;
      }

      line += `*${item.nome}*`;

      if (item.caixa === true) {
        line += `*Quantidade:* ${item.qt} cx`;
      } else {
        line += `*Quantidade:* ${item.qt} un`;
      }

      line += `*Total item:* ${cashInfo(value)}\n- - - - - - - - - - - - -`;
    }
  });

  line += `*Total pedido: *${calcTotalvalueOrders(order)}`;

  return line;
}
