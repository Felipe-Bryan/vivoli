import { alertModal } from '../components/alertModal';
import { Order } from '../types/Order';
import { getUrlValue } from '../utils/getUrlValue';
import { getStorageData } from '../utils/storageFunctions';
import { textGenerate } from '../utils/textGenerate';
import { calcTotalvalueOrdersToSend } from './calcTotalOrdersValue';

export function sendOrder() {
  const order: Order[] = getStorageData('order');

  const orderValue = calcTotalvalueOrdersToSend(order);

  setTimeout(() => {
    if (orderValue > 1) {
      const phone = getUrlValue('t');

      const msgContent = encodeURIComponent(textGenerate(order));

      const link = `https://wa.me/55${phone}?text=${msgContent}`;

      alertModal('Enviando', 'Você será redirecionado ao WhatsApp', 'Fechar');

      document.getElementById('openModal')!.click();

      window.location.replace(link);

      localStorage.removeItem('order');
    } else {
      alertModal('Atenção', 'Pedido deve ser superior a R$ 1,00', 'Fechar');

      document.getElementById('openModal')!.click();

      return;
    }
  }, 1000);
}
