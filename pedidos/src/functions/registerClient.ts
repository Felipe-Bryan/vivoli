import { modal, modalClose } from '../components/modal';
import { startHome } from '../pages/home';
import { Client } from '../types/Client';
import { getStorageData, saveToStorage } from '../utils/handleStorage';
import { invalidateInput } from '../utils/invalidateInput';

export function registerClient() {
  modal({
    label: 'Adicionar Cliente',
    body: registerInputs(),
    footer: buttons(),
  });

  const saveBtn = document.getElementById('saveClient')!;

  saveBtn.addEventListener('click', () => {
    saveClient();
  });
}

function registerInputs() {
  return `
<div class="input-group mb-3">
  <span class="input-group-text w-25" id="basic-addon1">Nome</span>
  <input type="text" class="form-control" placeholder="Nome/ Razão Social" id="name">
</div>

<div class="input-group mb-3">
  <span class="input-group-text w-25" id="basic-addon1">ID</span>
  <input type="text" class="form-control" placeholder="CPF ou CNPJ" id="id">
</div>`;
}

function buttons() {
  return `
<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
<button type="button" class="btn btn-success" id="saveClient">Salvar</button>`;
}

function saveClient() {
  const nameIpt = <HTMLInputElement>document.getElementById('name')!;
  const idIpt = <HTMLInputElement>document.getElementById('id')!;

  if (nameIpt.value === '') {
    alert('Informe o nome ou razão social');

    invalidateInput(nameIpt);

    return;
  }

  if (idIpt.value === '') {
    alert('Informe a identificação do cliente');

    invalidateInput(idIpt);

    return;
  }

  const newClient: Client = {
    nome: nameIpt.value,
    id: idIpt.value,
  };

  const clients: Client[] = getStorageData('clients') || [];
  clients.push(newClient);

  saveToStorage('clients', clients);

  modalClose();

  startHome();
}
