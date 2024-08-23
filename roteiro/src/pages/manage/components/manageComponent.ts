import { inputGroup } from '../../../components/inputGroup';

export function manageComponent() {
  let line = `
<div class="container p-0">
    <div class="row">
        <div class="col-12">`;

  //   line += selectForm({
  //     id: 'filter',
  //     title: 'Filtrar',
  //     options,
  //   });

  line += inputGroup({
    title: 'Pesquisar',
    type: 'text',
    placeholder: 'CPF/CNPJ/Nome/Razão',
  });

  line += `
        </div>
    </div>

    <div id="manageContent"></div>
</div>`;

  return line;
}
