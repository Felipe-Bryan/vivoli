import { inputGroup } from '../../../components/inputGroup';

export function manageComponent() {
  let line = `
<div class="container p-0">
    <div class="row">
        <div class="col">`;

  line += inputGroup({
    title: 'Pesquisar',
    type: 'text',
    placeholder: 'CPF/CNPJ/Nome/Razão/Cidade',
  });

  line += `
        </div>
    </div>

    <div id="totalClients" class="d-flex justify-content-end fst-italic px-2"></div>

    <div id="manageContent"></div>
</div>`;

  return line;
}
