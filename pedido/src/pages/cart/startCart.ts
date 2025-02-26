import { productCartItem } from '../../components/productCartItem';
import { addCartOrder } from '../../functions/addCartOrder';
import { removeCartOrder } from '../../functions/removeCartOrder';
import { sendOrder } from '../../functions/sendOrder';
import { Order } from '../../types/Order';
import { componentVisibility } from '../../utils/componentVisibility';
import { getUrlValue } from '../../utils/getUrlValue';
import { getStorageData } from '../../utils/storageFunctions';

export function startCart() {
  componentVisibility('cartContent', 'show');
  componentVisibility('sendOrder', 'show');
  componentVisibility('content', 'hide');
  componentVisibility('viewOrder', 'hide');
  componentVisibility('homeReturn', 'show');
  componentVisibility('home', 'hide');

  window.scrollTo(0, 0);

  const order: Order[] = getStorageData('order');
  const spot = document.getElementById('cartItems')!;
  spot.innerHTML = '';

  order.forEach((item) => {
    if (item.qt > 0) {
      spot.innerHTML += productCartItem(item);
    }
  });

  const sendBtn = document.getElementById('sendOrder')!;

  if (getUrlValue('t') === 'hist') {
    sendBtn.innerHTML = 'Salvar Pedido';
  } else {
    sendBtn.innerHTML = 'Enviar Pedido';
  }

  sendBtn.addEventListener('click', () => {
    sendOrder();
  });

  const addBtns = document.querySelectorAll('.addCartOrder');
  const removeBtns = document.querySelectorAll('.removeCartOrder');

  addBtns.forEach((btn) => {
    const id = btn.id.replace('addCart', '');

    btn.addEventListener('click', () => {
      addCartOrder(id);
    });
  });

  removeBtns.forEach((btn) => {
    const id = btn.id.replace('removeCart', '');

    btn.addEventListener('click', () => {
      removeCartOrder(id);
    });
  });
}
