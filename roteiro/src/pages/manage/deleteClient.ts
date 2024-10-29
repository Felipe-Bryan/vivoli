import { apiDelete } from '../../service/api.service';
import { startApp } from '../app/startApp';

export async function deleteClient(id: string) {
  const confirmation = confirm('Deseja deletar o cliente?');

  if (confirmation) {
    await apiDelete(`client/${id}`)
      .then((data) => {
        alert('Excluído com sucesso!');

        startApp();
      })
      .catch(() => {
        alert('Erro ao deletar o cliente!');
      });
  } else {
    return;
  }
}
