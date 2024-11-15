import { newOrderContent } from '../components/newOrderContent';
import { familias } from '../database/familias';
import { produtos } from '../database/produtos';
import { setEmptyOrder } from '../functions/setEmptyOrder';
import { setFamilies } from '../functions/setFamilies';
import { setProducts } from '../functions/setProducts';
import { root } from '../utils/root';
import { startHome } from './home';

export function startNewOrder() {
  setEmptyOrder(produtos);

  root.innerHTML = newOrderContent();

  const homeBtn = document.getElementById('home')!;

  homeBtn.addEventListener('click', () => {
    startHome();
  });

  setFamilies(familias);
  setProducts();
}
