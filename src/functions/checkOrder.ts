import { alertModal } from '../components/alertModal';
import { Modal, modalFooter } from '../components/base-components/Modal';
import { produtos } from '../database/produtos';
import { Order } from '../types/Order';
import { Product } from '../types/Product';
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
      Modal({
        id: 'alertModal',
        title: 'Atenção!',
        content: 'Existe um pedido salvo e não enviado, deseja continuar o pedido?',
        centered: true,
        staticBackdrop: true,
        footer: modalFooter({
          btns: 2,
          btn1: {
            color: 'primary',
            id: 'contBtn',
            label: 'Continuar Pedido',
            additionalProps: 'data-bs-dismiss="modal"',
          },
          btn2: {
            color: 'danger',
            id: 'modalFollow',
            label: 'Iniciar Novo',
          },
        }),
      });

      document.getElementById('openModal')!.click();

      document.getElementById('modalFollow')!.addEventListener('click', () => {
        setEmptyOrder(produtos);

        window.location.reload();
      });
    }
  }
}

function updateAlert() {
  alertModal({
    title: 'Atenção',
    content: 'Houve uma atualização nos produtos, o pedido salvo será deletado para que as atualizações façam efeito',
  });

  document.getElementById('cancelAlert')!.addEventListener('click', () => {
    const produtos: Product[] = getStorageData('produtos');

    setEmptyOrder(produtos);

    window.location.reload();
  });
}
