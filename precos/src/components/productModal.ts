import { familias } from '../database/familias';
import { Product } from '../types/Product';
import { BlockButton } from './base-components/Button';
import { Checkbox } from './base-components/Checkbox';
import { FloatingLabel } from './base-components/FloatingLabel';
import { Select, SelectOptionProps } from './base-components/Select';

export function productModal(product?: Product) {
  const options: SelectOptionProps[] = [];

  familias.forEach((family) => {
    const option: SelectOptionProps = {
      name: family.nome,
      value: family.id,
    };

    options.push(option);
  });

  let line = '';

  if (product) {
    // edição
    line += FloatingLabel({
      id: 'prodName',
      title: 'Nome do Produto',
      type: 'text',
      value: product.nome,
    });

    line += Select({
      id: 'prodFamily',
      title: 'Categoria',
      options,
    });

    line += FloatingLabel({
      id: 'prodCost',
      title: 'Custo',
      type: 'number',
      value: `${product.custo.toFixed(2)}`,
    });

    line += FloatingLabel({
      id: 'prodSale',
      title: 'Preço sugerido',
      type: 'number',
      value: `${product.sugestao.toFixed(2)}`,
    });

    line += FloatingLabel({
      id: 'boxQt',
      title: 'Quantidade por caixa',
      type: 'number',
      value: `${product.caixaQt}`,
    });

    line += BlockButton({
      color: 'danger',
      id: 'delProd',
      label: 'Deletar Produto',
    });
  } else {
    // adição
    line += FloatingLabel({
      id: 'prodName',
      title: 'Nome do Produto',
      type: 'text',
    });

    line += Select({
      id: 'prodFamily',
      title: 'Categoria',
      options,
    });

    line += FloatingLabel({
      id: 'prodCost',
      title: 'Custo',
      type: 'number',
    });

    line += FloatingLabel({
      id: 'prodSale',
      title: 'Preço sugerido',
      type: 'number',
    });

    line += FloatingLabel({
      id: 'boxQt',
      title: 'Quantidade por caixa',
      type: 'number',
    });

    line += Checkbox({
      id: 'box',
      label: 'Venda por Caixa',
      value: '',
      switch: true,
    });
  }

  return line;
}
