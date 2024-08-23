import { inputGroup } from '../../../components/inputGroup';
import { selectForm, SelectOptionItem } from '../../../components/selectForm';

export function manageComponent() {
  const options: SelectOptionItem[] = [
    { value: 'cidade', text: 'Cidade' },
    { value: 'bairro', text: 'Bairro' },
  ];

  let line = `
<div class="container">
    <div class="row">
        <p class="col-2"></p>
        <div class="col-10">`;

  //   line += selectForm({
  //     id: 'filter',
  //     title: 'Filtrar',
  //     options,
  //   });

  line += inputGroup({
    title: 'Pesquisar',
    type: 'text',
  });

  line += `
        </div>
    </div>

    <div id="manageContent"></div>
</div>`;

  return line;
}
