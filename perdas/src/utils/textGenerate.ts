import { calcTotalvalueOrders } from '../functions/calcTotalOrdersValue';
import { Order } from '../types/Order';
import { cashInfo } from './cashInfo';

export function textGenerate(order: Order[]) {
  let line = '';
  let value = 0;

  order.forEach((item) => {
    if (item.qt > 0) {
      value = item.qt * item.custo;
      // if (item.caixa === true) {
      //   value = item.caixaQt * item.custo * item.qt;
      // } else {
      //   value = item.qt * item.custo;
      // }

      line += `*${item.nome}*`;

      line += `\n*Quantidade:* ${item.qt} un`;

      // if (item.caixa === true) {
      //   line += `\n*Quantidade:* ${item.qt} cx`;
      // } else {
      //   line += `\n*Quantidade:* ${item.qt} un`;
      // }

      line += `\n*Total item:* ${cashInfo(value)}\n- - - - - - - - - - - - - - - - - - - - - - - -\n`;
    }
  });

  line += `\n*Total perdas:* ${calcTotalvalueOrders(order)}`;

  return line;
}
