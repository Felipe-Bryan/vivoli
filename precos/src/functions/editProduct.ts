import { alertModal } from '../components/alertModal';
import { Modal, modalClose, modalFooter } from '../components/base-components/Modal';
import { checkSelectedValue } from '../components/base-components/Select';
import { productModal } from '../components/productModal';
import { produtos } from '../database/produtos';
import { apiDelete, apiPut } from '../service/api.service';
import { Product } from '../types/Product';
import { validateProduct } from './validateProduct';

export function editProduct(id: string) {
  const produto = produtos.find((product) => product.id === id)!;

  Modal({
    id: 'editModal',
    title: `Editar Produto`,
    fullscreen: 'full',
    content: productModal(produto),
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

  checkSelectedValue(produto.familia);

  const nomeIpt = <HTMLInputElement>document.getElementById('prodName')!;
  const familiaIpt = <HTMLInputElement>document.getElementById('prodFamily')!;
  const custoIpt = <HTMLInputElement>document.getElementById('prodCost')!;
  const sugestaoIpt = <HTMLInputElement>document.getElementById('prodSale')!;
  const caixaQtIpt = <HTMLInputElement>document.getElementById('boxQt')!;

  const saveBtn = document.getElementById('save')!;

  saveBtn.addEventListener('click', async () => {
    const newProdutoToEdit: Product = {
      nome: nomeIpt.value,
      familia: familiaIpt.value,
      custo: Number(custoIpt.value),
      sugestao: Number(sugestaoIpt.value),
      caixaQt: Number(caixaQtIpt.value),
      caixa: produto.caixa,
    };

    const valid = validateProduct(newProdutoToEdit, 'edit');

    if (valid) {
      modalClose();

      alertModal({
        title: 'Aguarde',
        content: 'Processando Edição...',
      });

      await apiPut(`vivoli/produto/${produto.id}`, newProdutoToEdit)
        .then(() => {
          alertModal({
            title: 'Sucesso!',
            content: `<div>Produto editado com sucesso!</div>
          <div>A página será recarregada automaticamente.</div>`,
          });

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

  const delBtn = document.getElementById('delProd')!;

  delBtn.addEventListener('click', async () => {
    const confirmation = confirm('Esta ação não pode ser desfeita!\nDeseja realmente excluir o produto?');

    if (confirmation) {
      modalClose();

      alertModal({
        title: 'Aguarde',
        content: 'Processando exclusão de produto...',
      });

      await apiDelete(`vivoli/produto/${produto.id}`)
        .then(() => {
          alertModal({
            title: 'Sucesso!',
            content: `<div>Produto excluído com sucesso!</div>
        <div>A página será recarregada automaticamente.</div>`,
          });

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
