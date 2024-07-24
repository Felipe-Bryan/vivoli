import { searchClient } from '../functions/searchClient';
import { apiGet } from '../service/api.service';
import { saveToSessionStorage } from '../utils/handleStorage';
import { removeInvalidChar } from '../utils/removeInvalidChar';

export async function searchLocation() {
  await apiGet()
    .then((data) => {
      saveToSessionStorage('clients', data.data);
    })
    .catch(() => {
      alert('Erro inesperado ao obter os dados do servidor!');
    });

  const spot = document.getElementById('content')!;

  spot.innerHTML = '';

  let line = `
    <div class="input-group m-0 mb-2 px-2">
      <span class="input-group-text w-25" id="basic-addon1">Pesquisar</span>
      <input id="cnpjIpt" type="text" class="form-control" placeholder="CNPJ" aria-label="CNPJ" aria-describedby="basic-addon1" />
      <span class="input-group-text" id="searchLocation"><i class="bi bi-search"></i></span>
    </div>

    <div id="result"></div>`;

  spot.innerHTML = line;

  const searchBtn = document.getElementById('searchLocation')!;

  searchBtn.addEventListener('click', () => {
    const input = <HTMLInputElement>document.getElementById('cnpjIpt');

    searchClient(removeInvalidChar(input.value));
  });
}
