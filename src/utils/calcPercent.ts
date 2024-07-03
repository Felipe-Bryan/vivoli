import { Product } from '../types/Product';

export function calcPercent(produto: Product) {
  let value = 0;

  value = Number((produto.sugestao / produto.custo - 1).toFixed(0));

  return value;
}
