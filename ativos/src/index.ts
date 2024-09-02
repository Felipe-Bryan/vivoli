import { searchClient } from './components/searchClient';
import { apiGet } from './service/api.service';
import { saveToSessionStorage } from './utils/handleStorage';

Promise.all([
  apiGet('client').then((data) => saveToSessionStorage('clients', data.data)),

  apiGet('ativo').then((data) => saveToSessionStorage('ativos', data.data)),
])
  .then(() => {
    const root = document.getElementById('content')!;

    root.innerHTML = searchClient();
  })
  .catch(() => {
    alert('Erro inesperado ao obter os dados do servidor!');
  });
