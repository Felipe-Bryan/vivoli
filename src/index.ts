import { produtos } from './database/produtos';
import { setEmptyOrder } from './functions/setEmptyOrder';
import { startCart } from './pages/cart/startCart';
import { startHome } from './pages/home/startHome';
import { getUrlValue } from './utils/getUrlValue';

setEmptyOrder(produtos);
startHome();

document.getElementById('viewOrder')!.addEventListener('click', () => {
  startCart();
});

document.getElementById('sendOrder')!.addEventListener('click', () => {
  console.log(`enviar para ${getUrlValue('t')}`);
});

document.getElementById('homeReturn')!.addEventListener('click', () => {
  startHome();
});
