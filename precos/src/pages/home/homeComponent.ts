import { Accordion } from '../../components/base-components/Accordion';
import { Button } from '../../components/base-components/Button';

export const accordionId = 'home';

export function homeComponent() {
  let line = '';

  line += `
<div class="container">
    <div class="row mb-2">
        <div class="col text-center">${Button({
          color: 'primary',
          id: 'newFamily',
          label: 'Nova Categoria',
        })}</div>

        <div class="col text-center">${Button({
          color: 'primary',
          id: 'newProduct',
          label: 'Novo Produto',
        })}</div>
    </div>
</div>`;

  line += `<div id="content" class="container">${Accordion(accordionId)}</div>`;

  return line;
}
