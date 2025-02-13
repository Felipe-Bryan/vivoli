import { alertModal } from '../components/alertModal';
import { Client } from '../types/Client';
import { Order } from '../types/Order';
import { Pedido } from '../types/Pedido';
import { getUrlValue } from '../utils/getUrlValue';
import { invalidateInput } from '../utils/invalidateInput';
import { getStorageData, saveToStorage } from '../utils/storageFunctions';
import { textGenerate } from '../utils/textGenerate';
import { calcTotalvalueOrdersToSend } from './calcTotalOrdersValue';

export function sendOrder() {
  const order: Order[] = getStorageData('order');

  const orderValue = calcTotalvalueOrdersToSend(order);

  const minOrderValue = 0;

  setTimeout(() => {
    if (orderValue > minOrderValue) {
      const phone = getUrlValue('t');

      if (phone === 'hist') {
        const selectedClient: Client = getStorageData('selectedClient')!;

        const selectedOrder: Order[] = [];
        order.forEach((item) => {
          if (item.qt > 0) {
            selectedOrder.push(item);
          }
        });

        const pedido: Pedido = {
          cliente: selectedClient.nome,
          produtos: selectedOrder,
          data: '',
          valor: orderValue,
          id: '',
        };

        saveToStorage('orderToSave', pedido);

        alertModal('Informações do pedido', orderInfoIpt(), 'Cancelar', 'Concluir');
        const saveBtn = document.getElementById('modalFollow')!;
        document.getElementById('openModal')!.click();

        saveBtn.addEventListener('click', () => {
          finishSaveOrder();
        });
      } else {
        const msgContent = encodeURIComponent(textGenerate(order));

        const link = `https://wa.me/55${phone}?text=${msgContent}`;

        alertModal('Enviando', 'Você será redirecionado ao WhatsApp', 'Fechar');

        document.getElementById('openModal')!.click();

        window.location.replace(link);

        localStorage.removeItem('order');
      }
    } else {
      alertModal('Atenção', `Pedido deve ser superior a R$ ${minOrderValue.toFixed(2)}`, 'Fechar');

      document.getElementById('openModal')!.click();

      return;
    }
  }, 1000);
}

function orderInfoIpt() {
  return `
<div class="input-group mb-3">
  <span class="input-group-text w-25" id="basic-addon1">Data</span>
  <input type="text" class="form-control" placeholder="DDMMAAA" id="orderDate">
</div>

<div class="input-group mb-3">
  <span class="input-group-text w-25" id="basic-addon1">Numero</span>
  <input type="text" class="form-control" placeholder="Número do pedido" id="orderId">
</div>`;
}

function finishSaveOrder() {
  const order: Pedido = getStorageData('orderToSave');

  const dataIpt = <HTMLInputElement>document.getElementById('orderDate')!;
  const idIpt = <HTMLInputElement>document.getElementById('orderId')!;

  const data = dataIpt.value;
  const id = idIpt.value;

  if (data.length !== 8) {
    alert('Informe a data no formato DDMMAAAA!');

    invalidateInput(dataIpt);

    return;
  }

  if (id.length === 0) {
    alert('Informe o número do pedido!');

    invalidateInput(idIpt);

    return;
  }

  order.data = data;
  order.id = id;

  const orders: Pedido[] = getStorageData('orders') || [];

  orders.push(order);

  saveToStorage('orders', orders);

  alertModal('Sucesso!', 'Pedido salvo com sucesso\nAguarde você será redirecionado para a página inicial', 'OK');
  document.getElementById('openModal')!.click();

  setTimeout(() => {
    const baseUrl = 'https://vivoli.vercel.app/';
    window.location.replace(`${baseUrl}pedidos/`);
  }, 1000);
}
