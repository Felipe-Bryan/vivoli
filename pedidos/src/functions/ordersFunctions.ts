import { startOrders } from '../pages/orders';
import { Pedido } from '../types/Pedido';
import { saveToStorage } from '../utils/handleStorage';

export function setOrdersFunctions(orders: Pedido[]) {
  setDelete(orders);
  viewOrder(orders);
}

function setDelete(orders: Pedido[]) {
  const deleteBtns = document.querySelectorAll('.del');

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const confirmation = confirm('Deseja deletar o pedido?');

      if (confirmation) {
        const order = orders.find((item) => item.id === btn.id.replace('del-', ''))!;

        // orders.splice(orders.indexOf(order), 1);

        // saveToStorage('orders', orders);

        // startOrders();

        console.log(order);
      } else {
        return;
      }
    });
  });
}

function viewOrder(orders: Pedido[]) {
  const viewBtns = document.querySelectorAll('.view');

  viewBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const order = orders.find((item) => item.id === btn.id.replace('view-', ''));

      console.log(order);
    });
  });
}
