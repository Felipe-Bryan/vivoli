import { orderLine } from '../components/orderLine';
import { ordersHeader } from '../components/ordersHeader';
import { Pedido } from '../types/Pedido';
import { getStorageData } from '../utils/handleStorage';
import { root } from '../utils/root';
import { startHome } from './home';

export function startOrders() {
  const orders: Pedido[] = getStorageData('orders') || [];

  console.log(orders);

  root.innerHTML = ordersHeader();

  const pageContent = document.getElementById('pageContent')!;
  pageContent.innerHTML = '';

  orders.forEach((order) => {
    pageContent.innerHTML += orderLine(order);
  });

  const homeBtn = document.getElementById('home')!;

  homeBtn.addEventListener('click', () => {
    startHome();
  });

  const filterBtn = document.getElementById('filter')!;

  filterBtn.addEventListener('click', () => {
    // set filter
  });
}
