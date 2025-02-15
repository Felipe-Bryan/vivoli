import { alertModal } from './components/alertModal';
import { apiGet } from './services/api.service';
import { startApp } from './startApp';
import { saveToStorage } from './utils/storageFunctions';

Promise.all([
  apiGet('vivoli/familia').then((data) => {
    saveToStorage('familias', data.data);
  }),

  apiGet('vivoli/produto').then((data) => {
    saveToStorage('produtos', data.data);
  }),
])
  .then(() => {
    startApp();
  })
  .catch(() => {
    alertModal({
      title: 'Erro!',
      content: 'Erro ao buscar dados do servidor!',
    });
  });
