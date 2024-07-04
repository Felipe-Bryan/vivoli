import { Order } from '../types/Order';
import { getStorageData, saveToStorage } from '../utils/storageFunctions';
import { calcItem } from './calcItem';
import { calcTotalvalueOrders } from './calcTotalOrdersValue';

export function removeCartOrder(id: string) {
  const order: Order[] = getStorageData('order');
  const spot = document.getElementById(`cartQt${id}`)!;
  const valueSpot = document.getElementById(`cartValue${id}`)!;

  const product = order.find((item) => item.id === id);
  const index = order.findIndex((item) => item.id === id)!;

  if (product) {
    if (product.qt > 0) {
      product.qt--;

      if (product.caixa === true) {
        spot.innerHTML = `${product.qt * product.caixaQt} - ${product.qt}`;
      } else {
        spot.innerHTML = `${product.qt}`;
      }

      valueSpot.innerHTML = calcItem(product);

      order[index] = product;
      calcTotalvalueOrders(order);
    }
  }

  saveToStorage('order', order);
}
