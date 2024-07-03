import { Product } from '../types/Product';

export function calcPercent(produto: Product) {
  let v1 = produto.sugestao / produto.custo;

  let v2 = v1 - 1;

  let v3 = v2 * 100;

  let v4 = v3.toFixed(0);

  return v4;
}
