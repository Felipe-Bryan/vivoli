import { productCartItem } from '../../components/productCartItem';
import { Order } from '../../types/Order';
import { componentVisibility } from '../../utils/componentVisibility';
import { getStorageData } from '../../utils/storageFunctions';

export function startCart() {
  componentVisibility('cartContent', 'show');
  componentVisibility('sendOrder', 'show');
  componentVisibility('content', 'hide');
  componentVisibility('viewOrder', 'hide');
  componentVisibility('homeReturn', 'show');

  window.scrollTo(0, 0);

  const order: Order[] = getStorageData('order');
  const spot = document.getElementById('cartItems')!;
  spot.innerHTML = '';

  order.forEach((item) => {
    if (item.qt > 0) {
      spot.innerHTML += productCartItem(item);
    }
  });
}
