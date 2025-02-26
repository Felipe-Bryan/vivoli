import { FloatingLabel } from '../../components/base-components/FloatingLabel';
import { linkComponent } from '../../components/linkComponent';

export function homeComponent() {
  let line = '';

  line += `<div id="content" class="container">
  <div class="row">
      <div class="col">${FloatingLabel({
        id: 'tel',
        title: 'Telefone',
        type: 'number',
        additionalClass: 'mb-1',
      })}</div>
  </div>  
  ${linkComponent({
    id: 'pedido',
    label: 'Pedidos (Cliente)',
    copyBtn: true,
    toTel: true,
  })}

  ${linkComponent({
    id: 'cadastro',
    label: 'Cadastro (Cliente)',
    copyBtn: true,
    toTel: true,
  })}

  ${linkComponent({
    id: 'perdas',
    label: 'Perdas (Vendedor)',
    toTel: true,
  })}

  ${linkComponent({
    id: 'precos',
    label: 'Gerenciar produtos',
  })}
</div>`;

  return line;
}
