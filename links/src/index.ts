import { alertModal } from './components/alertModal';
import { startHome } from './pages/home/startHome';
import { apiGet } from './service/api.service';
import { saveToSessionStorage } from './utils/handleStorage';

Promise.all([
  apiGet('vivoli/familia').then((data) => {
    saveToSessionStorage('familias', data.data);
  }),

  apiGet('vivoli/produto').then((data) => {
    saveToSessionStorage('produtos', data.data);
  }),
])
  .then(() => {
    startHome();
  })
  .catch(() => {
    alertModal({
      title: 'Erro!',
      content: 'Erro ao buscar dados do servidor!',
    });
  });
