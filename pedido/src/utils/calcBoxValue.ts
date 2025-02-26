import { Product } from '../types/Product';

export function calcBoxValue(produto: Product) {
  let value = produto.custo * produto.caixaQt;

  return value;
}
