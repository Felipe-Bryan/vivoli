import { Product } from '../types/Product';
import { invalidateInput } from '../utils/invalidateInput';

export function validateProduct(produto: Product, operation: 'create' | 'edit'): boolean {
  const nomeIpt = <HTMLInputElement>document.getElementById('prodName')!;
  const familiaIpt = <HTMLInputElement>document.getElementById('prodFamily')!;
  const custoIpt = <HTMLInputElement>document.getElementById('prodCost')!;
  const sugestaoIpt = <HTMLInputElement>document.getElementById('prodSale')!;
  const caixaQtIpt = <HTMLInputElement>document.getElementById('boxQt')!;

  if (operation === 'create') {
    if (produto.nome === '') {
      alert('Informe o nome do Produto!');

      invalidateInput(nomeIpt);

      return false;
    }

    if (produto.familia === '0') {
      alert('Informe a categoria do Produto!');

      invalidateInput(familiaIpt);

      return false;
    }

    if (produto.custo === 0) {
      alert('Informe o preço de custo do Produto!');

      invalidateInput(custoIpt);

      return false;
    }

    if (produto.sugestao === 0) {
      alert('Informe a sugestão de preço do Produto!');

      invalidateInput(sugestaoIpt);

      return false;
    }

    if (produto.caixaQt === 0) {
      alert('Informe a quantidade por caixa do Produto!');

      invalidateInput(caixaQtIpt);

      return false;
    }

    return true;
  } else {
    if (produto.nome === '') {
      alert('Informe o nome do Produto!');

      invalidateInput(nomeIpt);

      return false;
    }

    if (produto.familia === '0') {
      alert('Informe a categoria do Produto!');

      invalidateInput(familiaIpt);

      return false;
    }

    if (produto.custo === 0) {
      alert('Informe o preço de custo do Produto!');

      invalidateInput(custoIpt);

      return false;
    }

    if (produto.sugestao === 0) {
      alert('Informe a sugestão de preço do Produto!');

      invalidateInput(sugestaoIpt);

      return false;
    }

    if (produto.caixaQt === 0) {
      alert('Informe a quantidade por caixa do Produto!');

      invalidateInput(caixaQtIpt);

      return false;
    }

    return true;
  }
}
