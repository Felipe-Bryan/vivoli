import { Order } from '../types/Order';
import { getStorageData, saveToStorage } from '../utils/storageFunctions';
import { calcItem } from './calcItem';
import { calcTotalvalueOrders } from './calcTotalOrdersValue';

export function addOrder(id: string) {
  const order: Order[] = getStorageData('order');
  const spot = document.getElementById(`orderQt${id}`)!;

  const product = order.find((item) => item.id === id);
  const index = order.findIndex((item) => item.id === id)!;

  if (product) {
    product.qt++;
    spot.innerHTML = String(product.qt);

    order[index] = product;
    calcItem(product);
    calcTotalvalueOrders(order);
  }

  saveToStorage('order', order);
}
