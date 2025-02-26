import { Order } from '../types/Order';
import { Product } from '../types/Product';
import { saveToStorage } from '../utils/storageFunctions';

export function setEmptyOrder(products: Product[]) {
  let order: Order[] = [];

  products.forEach((product) => {
    let newOrder: Order = { ...product, qt: 0 };

    order.push(newOrder);
  });

  saveToStorage('order', order);
}
