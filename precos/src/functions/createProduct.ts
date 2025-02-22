import { alertModal } from '../components/alertModal';
import { Modal, modalClose, modalFooter } from '../components/base-components/Modal';
import { productModal } from '../components/productModal';
import { apiPost } from '../service/api.service';
import { Product } from '../types/Product';
import { storageKey } from './reloadCount';
import { validateProduct } from './validateProduct';

export function createProduct() {
  Modal({
    id: 'createModal',
    title: `Adicionar Produto`,
    fullscreen: 'full',
    content: productModal(),
    footer: modalFooter({
      btns: 2,
      btn1: {
        color: 'danger',
        id: 'cancel',
        label: 'Cancelar',
        additionalProps: 'data-bs-dismiss="modal"',
      },
      btn2: {
        color: 'success',
        id: 'save',
        label: 'Salvar',
      },
    }),
  });

  const nomeIpt = <HTMLInputElement>document.getElementById('prodName')!;
  const familiaIpt = <HTMLInputElement>document.getElementById('prodFamily')!;
  const custoIpt = <HTMLInputElement>document.getElementById('prodCost')!;
  const sugestaoIpt = <HTMLInputElement>document.getElementById('prodSale')!;
  const caixaQtIpt = <HTMLInputElement>document.getElementById('boxQt')!;
  const caixaIpt = <HTMLInputElement>document.getElementById('box')!;

  const saveBtn = document.getElementById('save')!;

  saveBtn.addEventListener('click', async () => {
    const newProduto: Product = {
      nome: nomeIpt.value,
      familia: familiaIpt.value,
      custo: Number(custoIpt.value),
      sugestao: Number(sugestaoIpt.value),
      caixaQt: Number(caixaQtIpt.value),
      caixa: caixaIpt.checked ? true : false,
    };

    const valid = validateProduct(newProduto, 'create');

    if (valid) {
      modalClose();

      alertModal({
        title: 'Aguarde',
        content: 'Processando criação de produto...',
      });

      await apiPost(`vivoli/produto`, newProduto)
        .then(() => {
          alertModal({
            title: 'Sucesso!',
            content: `<div>Produto criado com sucesso!</div>
          <div>A página será recarregada automaticamente.</div>`,
          });

          localStorage.removeItem(storageKey);

          setTimeout(() => {
            location.reload();
          }, 1000);
        })
        .catch(() => {
          alertModal({
            title: 'Atenção',
            content: `A ação não foi executada devido a um erro interno, tente novamente mais tarde`,
          });
        });
    }
  });
}
