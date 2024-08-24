import { inputGroupSpan } from '../../components/inputGroupSpan';
import { modal, modal2 } from '../../components/modal';
import { Ativo } from '../../types/Ativo';
import { Client } from '../../types/Client';
import { getSessionStorageData } from '../../utils/handleStorage';
import { editInputs } from './editClientInputs';

export function editClient(id: string) {
  const clients: Client[] = getSessionStorageData('clients');

  const client = clients.find((item) => item.id === id);

  if (client) {
    modal('Editar Cliente', editInputs(client));

    const updateLocationBtn = document.getElementById('updateLocation')!;

    updateLocationBtn.addEventListener('click', () => {
      const latitude = getSessionStorageData('latitude');
      const longitude = getSessionStorageData('longitude');

      const latitudeIpt = <HTMLInputElement>document.getElementById('latitude-ipt')!;
      const longitudeIpt = <HTMLInputElement>document.getElementById('longitude-ipt')!;

      latitudeIpt.value = latitude;
      longitudeIpt.value = longitude;
    });

    const viewFreezerBtn = document.getElementById('viewFreezer')!;

    viewFreezerBtn.addEventListener('click', () => {
      const ativos: Ativo[] = getSessionStorageData('ativos');
      const ativosCliente: Ativo[] = ativos.filter((item) => item.clientId === client.cnpj);

      modal2('Freezers', freezerLine(ativosCliente));
    });

    const saveBtn = document.getElementById('saveEdit')!;

    // saveBtn.addEventListener('click', () => {
    //   const
    // })
  } else {
    console.log('cliente não encontrado');
  }
}

function freezerLine(ativos: Ativo[]) {
  let line = '';

  ativos.forEach((item) => {
    line += inputGroupSpan({
      title: 'Ativo',
      inputId: `${item.id}`,
      type: 'text',
      spanId: `save${item.id}`,
      spanText: `<i class="bi bi-floppy"></i>`,
    });
  });

  return line;
}
