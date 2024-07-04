import { productItem } from '../components/productItem';
import { Order } from '../types/Order';
import { getStorageData } from '../utils/storageFunctions';
import { addOrder } from './addOrder';
import { removeOrder } from './removeOrder';

export function setProducts() {
  const familiesSpot = <NodeListOf<HTMLElement>>document.querySelectorAll('.family');
  const order: Order[] = getStorageData('order');

  familiesSpot.forEach((element) => {
    const familyId = element.id.replace('Items', '');
    order.forEach((product) => {
      if (product.familia === familyId) {
        element.innerHTML += productItem(product);
      }
    });
  });

  const addBtns = document.querySelectorAll('.addBtn');
  addBtns.forEach((btn) => {
    const id = btn.id.replace('add', '');

    btn.addEventListener('click', () => {
      addOrder(id);
    });
  });

  const removeBtns = document.querySelectorAll('.removeBtn');
  removeBtns.forEach((btn) => {
    const id = btn.id.replace('remove', '');

    btn.addEventListener('click', () => {
      removeOrder(id);
    });
  });
}
