import { Product } from '../types/Product';
import { calcPercent } from '../utils/calcPercent';
import { toCash } from '../utils/toCash';
import { Button } from './base-components/Button';
import { Checkbox } from './base-components/Checkbox';

export function productItem(product: Product) {
  let line = `
<div class="container-fluid border-bottom border-2 mb-2 bg-light">
  <div class="row">
    <div class="col p-0 fw-semibold fst-italic">${product.nome}</div>
  </div>
  <div class="row">
    <div class="col p-0 m-0">Custo: ${toCash(product.custo)}</div>
    <div class="col p-0 m-0">Venda: ${toCash(product.sugestao)} <span>(${calcPercent(product)})</span></div>
  </div>
  <div class="row">
    <div class="col p-0 m-0">Caixa: <span>${product.caixaQt}</span></div>
    <div class="col p-0 m-0">
      ${Checkbox({
        id: `caixa-${product.id}`,
        label: 'Venda por Caixa',
        value: '',
        switch: true,
        checked: product.caixa,
      })}
    </div>
  </div>
  <div class="row">
    <div class="col p-0 m-0 mx-2">
      ${Button({
        color: 'success',
        id: `edit-${product.id}`,
        label: 'Editar',
        additionalClass: 'edit p-0 m-0 mb-1 px-2',
      })}
    </div>
  </div>
</div>`;

  return line;
}
