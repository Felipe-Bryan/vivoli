import { alertModal } from '../components/alertModal';
import { produtos } from '../database/produtos';
import { Order } from '../types/Order';
import { getStorageData } from '../utils/storageFunctions';
import { setEmptyOrder } from './setEmptyOrder';

export function checkOrder() {
  const order: Order[] = getStorageData('order');

  if (order.length === 0) {
    setEmptyOrder(produtos);
  } else {
    let ordered = 0;

    order.forEach((product) => {
      if (product.qt > 0) {
        ordered++;
      }
    });

    if (ordered > 0) {
      alertModal(
        'Atenção',
        'Existe um pedido salvo e não enviado, deseja continuar o pedido?',
        'Continuar pedido',
        'Iniciar novo'
      );

      document.getElementById('openModal')!.click();

      document.getElementById('modalFollow')!.addEventListener('click', () => {
        setEmptyOrder(produtos);

        window.location.reload();
      });
    }
  }
}
