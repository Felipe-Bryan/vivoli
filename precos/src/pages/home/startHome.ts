import { alertModal } from '../../components/alertModal';
import { AccordionButton } from '../../components/base-components/Accordion';
import { Root } from '../../components/base-components/Root';
import { productItem } from '../../components/productItem';
import { familias } from '../../database/familias';
import { produtos } from '../../database/produtos';
import { createProduct } from '../../functions/createProduct';
import { editProduct } from '../../functions/editProduct';
import { apiPut } from '../../service/api.service';
import { accordionId, homeComponent } from './homeComponent';

export function startHome() {
  Root.innerHTML = homeComponent();

  const accordionContent = document.getElementById(accordionId)!;

  familias.forEach((family) => {
    accordionContent.innerHTML += AccordionButton({
      id: family.id,
      name: family.nome,
      parentId: accordionId,
    });
  });

  const familiesSpot = document.querySelectorAll(`.${accordionId}`);

  familiesSpot.forEach((el) => {
    const familyId = el.id.replace('content-', '');

    produtos.forEach((product) => {
      if (product.familia === familyId) {
        el.innerHTML += productItem(product);
      }
    });
  });

  const editBtns = document.querySelectorAll('.edit');

  editBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      editProduct(btn.id.replace('edit-', ''));
    });
  });

  const newProdBtn = document.getElementById('newProduct')!;

  newProdBtn.addEventListener('click', () => {
    createProduct();
  });

  const switches = <NodeListOf<HTMLInputElement>>document.querySelectorAll('.form-check-input');

  switches.forEach((el) => {
    el.addEventListener('change', async () => {
      await apiPut(`vivoli/produto/${el.id.replace('caixa-', '')}`, {
        caixa: el.checked,
      })
        .then(() => {
          alertModal({
            title: 'Sucesso!',
            content: 'Informação alterada com sucesso',
          });
        })
        .catch(() => {
          alertModal({
            title: 'Falha',
            content: 'A alteração solicitada não foi executada devido a um erro, tente novamente mais tarde!',
          });
        });
    });
  });
}
