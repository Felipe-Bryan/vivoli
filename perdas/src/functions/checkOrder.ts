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

    for (let i = 0; i < order.length; i++) {
      if (order[i].caixa !== produtos[i].caixa) {
        updateAlert();

        return;
      }

      if (order[i].custo !== produtos[i].custo) {
        updateAlert();

        return;
      }

      if (order[i].sugestao !== produtos[i].sugestao) {
        updateAlert();

        return;
      }

      if (order[i].nome !== produtos[i].nome) {
        updateAlert();

        return;
      }

      if (order[i].caixaQt !== produtos[i].caixaQt) {
        updateAlert();

        return;
      }

      if (order[i].familia !== produtos[i].familia) {
        updateAlert();

        return;
      }

      if (order[i].qt > 0) {
        ordered++;
      }
    }

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

function updateAlert() {
  alertModal(
    'Atenção',
    'Houve uma atualização nos produtos, o pedido salvo será deletado para que as atualizações façam efeito',
    'Fechar'
  );

  document.getElementById('openModal')!.click();

  document.getElementById('returnOption')!.addEventListener('click', () => {
    setEmptyOrder(produtos);

    window.location.reload();
  });
}
