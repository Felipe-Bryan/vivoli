import { Order } from '../types/Order';
import { getStorageData, saveToStorage } from '../utils/storageFunctions';
import { calcItem } from './calcItem';
import { calcTotalvalueOrders } from './calcTotalOrdersValue';

export function addCartOrder(id: string) {
  const order: Order[] = getStorageData('order');
  const spot = document.getElementById(`cartQt${id}`)!;
  const valueSpot = document.getElementById(`cartValue${id}`)!;

  const product = order.find((item) => item.id === id);
  const index = order.findIndex((item) => item.id === id)!;

  if (product) {
    product.qt++;

    if (product.caixa === true) {
      spot.innerHTML = `${product.qt} (${product.qt * product.caixaQt})`;
    } else {
      spot.innerHTML = `${product.qt}`;
    }

    valueSpot.innerHTML = calcItem(product);

    order[index] = product;
    calcTotalvalueOrders(order);
  }

  saveToStorage('order', order);
}
