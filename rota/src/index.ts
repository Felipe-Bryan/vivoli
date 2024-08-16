import { initSearch } from './functions/initSearch';
import { apiGet } from './service/api.service';
import { saveToSessionStorage } from './utils/handleStorage';

Promise.all([
  apiGet('client').then((data) => saveToSessionStorage('clients', data.data)),

  apiGet('vendedor').then((data) => saveToSessionStorage('vendedores', data.data)),

  apiGet('setor').then((data) => saveToSessionStorage('setores', data.data)),
])
  .then(() => {
    initSearch();
  })
  .catch(() => {
    alert('Erro inesperado ao obter os dados do servidor!');
  });
