import { familias } from '../../database/familias';
import { calcTotalvalueOrders } from '../../functions/calcTotalOrdersValue';
import { setFamilies } from '../../functions/setFamilies';
import { setProducts } from '../../functions/setProducts';
import { Order } from '../../types/Order';
import { componentVisibility } from '../../utils/componentVisibility';
import { getUrlValue } from '../../utils/getUrlValue';
import { getStorageData } from '../../utils/storageFunctions';

export function startHome() {
  const hist = getUrlValue('t');

  if (hist === 'hist') {
    componentVisibility('home', 'show');
  }
  componentVisibility('cartContent', 'hide');
  componentVisibility('sendOrder', 'hide');
  componentVisibility('content', 'show');
  componentVisibility('viewOrder', 'show');
  componentVisibility('homeReturn', 'hide');

  window.scrollTo(0, 0);

  setFamilies(familias);

  const order: Order[] = getStorageData('order');

  if (order) {
    setProducts();
    calcTotalvalueOrders(order);
  }
}
