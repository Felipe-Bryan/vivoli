import { inputGroupSpan } from '../../components/inputGroupSpan';
import { modal, modal2 } from '../../components/modal';
import { validateClient } from '../../functions/validateClient';
import { apiPut } from '../../service/api.service';
import { getCep } from '../../service/cep.service';
import { Ativo } from '../../types/Ativo';
import { Client } from '../../types/Client';
import { RegisterClientInputs } from '../../types/RegisterClientInputs';
import { clearInputs } from '../../utils/clearInputs';
import { getLocation } from '../../utils/getLocation';
import { getSessionStorageData } from '../../utils/handleStorage';
import { removeInvalidChar, removeInvalidCharCep, removeInvalidCharPhone } from '../../utils/removeInvalidChar';
import { setHourString } from '../../utils/setHourString';
import { calcSequencia } from '../register/calcSequencia';
import { editInputs } from './components/editClientInputs';

export function editClient(id: string) {
  getLocation();

  const clients: Client[] = getSessionStorageData('clients');

  const client = clients.find((item) => item.id === id);

  if (client) {
    modal('Editar Cliente', editInputs(client));

    const inputs: RegisterClientInputs = {
      nome: <HTMLInputElement>document.getElementById('nome-ipt')!,
      cpf: <HTMLInputElement>document.getElementById('cpf-ipt')!,
      rg: <HTMLInputElement>document.getElementById('rg-ipt')!,
      nascimento: <HTMLInputElement>document.getElementById('nascimento-ipt')!,
      email: <HTMLInputElement>document.getElementById('email-ipt')!,
      tel: <HTMLInputElement>document.getElementById('tel-ipt')!,

      cnpj: <HTMLInputElement>document.getElementById('cnpj-ipt')!,
      ie: <HTMLInputElement>document.getElementById('ie-ipt')!,
      razao: <HTMLInputElement>document.getElementById('razao-ipt')!,
      fantasia: <HTMLInputElement>document.getElementById('fantasia-ipt')!,

      abreH: <HTMLInputElement>document.getElementById('abreH')!,
      abreM: <HTMLInputElement>document.getElementById('abreM')!,
      fechaH: <HTMLInputElement>document.getElementById('fechaH')!,
      fechaM: <HTMLInputElement>document.getElementById('fechaM')!,

      cep: <HTMLInputElement>document.getElementById('cep-ipt')!,
      endereco: <HTMLInputElement>document.getElementById('endereco-ipt')!,
      numero: <HTMLInputElement>document.getElementById('numero-ipt')!,
      bairro: <HTMLInputElement>document.getElementById('bairro-ipt')!,
      cidade: <HTMLInputElement>document.getElementById('cidade-ipt')!,
      estado: <HTMLInputElement>document.getElementById('estado-ipt')!,

      setor: <HTMLSelectElement>document.getElementById('setor-ipt')!,

      diaSemana: <HTMLSelectElement>document.getElementById('diasemana-ipt')!,
      frequencia: <HTMLSelectElement>document.getElementById('frequencia-ipt')!,
      sequencia: <HTMLInputElement>document.getElementById('sequencia-ipt')!,

      latitude: <HTMLInputElement>document.getElementById('latitude-ipt')!,
      longitude: <HTMLInputElement>document.getElementById('longitude-ipt')!,
    };

    inputs.cep.addEventListener('change', async () => {
      const cep = removeInvalidChar(inputs.cep.value);

      await getCep(cep)
        .then((data: any) => {
          if (data) {
            inputs.endereco.value = data.street;
            inputs.bairro.value = data.district;
            inputs.cidade.value = data.city;
            inputs.estado.value = data.stateShortname;
          }
        })
        .catch(() => {
          console.log('Não encontrado');
        });
    });

    const updateLocationBtn = document.getElementById('updateLocation')!;

    updateLocationBtn.addEventListener('click', () => {
      setTimeout(() => {
        const latitude = getSessionStorageData('latitude');
        const longitude = getSessionStorageData('longitude');

        inputs.latitude.value = latitude;
        inputs.longitude.value = longitude;
      }, 1000);
    });

    // const viewFreezerBtn = document.getElementById('viewFreezer')!;

    // viewFreezerBtn.addEventListener('click', () => {
    //   const ativos: Ativo[] = getSessionStorageData('ativos');
    //   const ativosCliente: Ativo[] = ativos.filter((item) => item.clientId === client.cnpj);

    //   modal2('Freezers', freezerLine(ativosCliente));
    // });

    const saveBtn = document.getElementById('saveEdit')!;

    saveBtn.addEventListener('click', async () => {
      let setor = client.setor;
      let diaSemana = client.diaSemana;
      let frequencia = client.frequencia;

      if (inputs.diaSemana.value !== '0') {
        diaSemana = inputs.diaSemana.value;
      }

      if (inputs.setor.value !== '0') {
        setor = inputs.setor.value;
      }

      if (inputs.frequencia.value !== '0') {
        frequencia = inputs.frequencia.value;
      }

      const editedClient: Client = {
        nome: inputs.nome.value,
        cpf: removeInvalidChar(inputs.cpf.value),
        rg: removeInvalidChar(inputs.rg.value),
        nascimento: removeInvalidChar(inputs.nascimento.value),
        email: inputs.email.value.toLowerCase(),
        tel: removeInvalidCharPhone(inputs.tel.value),

        cnpj: removeInvalidChar(inputs.cnpj.value),
        ie: removeInvalidChar(inputs.ie.value),
        razao: removeInvalidChar(inputs.razao.value),
        fantasia: removeInvalidChar(inputs.fantasia.value),
        abre: setHourString(Number(inputs.abreH.value), Number(inputs.abreM.value)),
        fecha: setHourString(Number(inputs.fechaH.value), Number(inputs.fechaM.value)),

        cep: removeInvalidCharCep(inputs.cep.value),
        endereco: removeInvalidChar(inputs.endereco.value),
        numero: removeInvalidChar(inputs.numero.value),
        bairro: removeInvalidChar(inputs.bairro.value),
        cidade: removeInvalidChar(inputs.cidade.value),
        estado: removeInvalidChar(inputs.estado.value),

        setor,
        diaSemana,
        frequencia,

        latitude: Number(inputs.latitude.value),
        longitude: Number(inputs.longitude.value),

        ativo: client.ativo,
        bloqueado: client.bloqueado,
        atendido: client.atendido,
        sequencia: client.sequencia,
      };

      const valid = validateClient(editedClient, inputs);

      if (valid !== undefined) {
        await apiPut(`client/${client.id}`, valid)
          .then(() => {
            clearInputs();

            alert('Cliente editado com sucesso!');
          })
          .catch(() => {
            alert('Erro ao atualizar cliente, tente novamente mais tarde!');
          });
      } else {
        console.log('Falha');
      }
    });
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
