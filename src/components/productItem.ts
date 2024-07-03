import { Product } from '../types/Product';
import { calcBoxValue } from '../utils/calcBoxValue';
import { calcPercent } from '../utils/calcPercent';

export function productItem(produto: Product) {
  let line = `
<div class="container-fluid border-bottom border-2 mb-2">
    <div class="row">
        <div class="col p-0 fw-semibold fst-italic">${produto.nome}</div>
    </div>

    <div class="row">
        <div class="p-0 m-0 col-2">Custo</div>
        <div class="p-0 m-0 col-3 text-center">R$ ${produto.custo}</div>
        <div class="p-0 m-0 col-3">Sugerido</div>
        <div class="p-0 m-0 col-4 text-end">R$ ${produto.sugestao.toFixed(2)} (${calcPercent(produto)}%)</div>
    </div>`;

  if (produto.caixa === true) {
    line += `<div class="row">
        <div class="p-0 m-0 col-6">Caixa com: <span>${produto.caixaQt}</span></div>
        <div class="p-0 m-0 col-6 text-end">R$ <span id="valorCaixa">${calcBoxValue(produto).toFixed(2)}</span></div>
        </div>`;
  }

  line += `<div class="row d-flex align-items-center justify-content-end my-1">
        <div class="col-3 col-sm-1 d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-danger"><i class="bi bi-dash"></i></button>
        </div>

        <div class="col-3 col-sm-1 text-center" id="orderQt">1</div>

        <div class="col-3 col-sm-1 d-flex align-items-center justify-content-center">
        <button type="button" class="btn btn-success"><i class="bi bi-plus"></i></button>
        </div>
    </div>
</div>`;

  return line;
}
