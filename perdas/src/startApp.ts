import { checkOrder } from './functions/checkOrder';
import { reloadCount } from './functions/reloadCount';
import { sendOrder } from './functions/sendOrder';
import { startCart } from './pages/cart/startCart';
import { startHome } from './pages/home/startHome';

export function startApp() {
  reloadCount();

  checkOrder();

  startHome();

  document.getElementById('viewOrder')!.addEventListener('click', () => {
    startCart();
  });

  document.getElementById('sendOrder')!.addEventListener('click', () => {
    sendOrder();
  });

  document.getElementById('homeReturn')!.addEventListener('click', () => {
    startHome();
  });
}
