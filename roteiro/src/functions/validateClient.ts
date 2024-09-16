import { calcSequencia, reverseCalcSequencia } from '../pages/register/calcSequencia';
import { Client } from '../types/Client';
import { RegisterClientInputs } from '../types/RegisterClientInputs';
import { getSessionStorageData } from '../utils/handleStorage';
import { invalidateInput } from '../utils/invalidateInput';

export function validateClient(client: Client, inputs: RegisterClientInputs) {
  if (client.nome.length === 0) {
    client.nome = '-';
  }

  if (client.cpf.length === 0) {
    if (client.cnpj.length !== 0) {
      client.cpf = '0';
    } else {
      alert('Informe um identificador para o cliente\nCPF ou CNPJ');

      invalidateInput(inputs.cpf);
      invalidateInput(inputs.cnpj);

      return;
    }
  }

  if (client.rg.length === 0) {
    client.rg = '0';
  }

  if (client.nascimento.length === 0) {
    client.nascimento = '00000000';
  }

  if (client.email.length === 0) {
    client.email = '-';
  }

  if (client.tel.length === 0) {
    client.tel = '0';
  }

  if (client.cnpj.length === 0) {
    if (client.cpf.length !== 0) {
      const confirmation = confirm('CNPJ não informado!\nProsseguir apenas com CPF?');

      if (confirmation) {
        client.cnpj = client.cpf;
      } else {
        invalidateInput(inputs.cnpj);
        return;
      }
    } else {
      alert('Informe um identificador para o cliente\nCPF ou CNPJ');
    }
  }

  if (client.ie.length === 0) {
    client.ie = '-';
  }

  if (client.razao.length === 0) {
    client.razao = client.nome;
  }

  if (client.fantasia.length === 0) {
    client.fantasia = '-';
  }

  if (client.cep.length === 0) {
    client.cep = '0';
  }

  if (client.endereco.length === 0) {
    client.endereco = '-';
  }

  if (client.numero.length === 0) {
    client.numero = '0';
  }

  if (client.bairro.length === 0) {
    client.bairro = '-';
  }

  if (client.cidade.length === 0) {
    client.cidade = '-';
  }

  if (client.estado.length === 0) {
    client.estado = '-';
  }

  if (client.setor === '0') {
    alert('Informe o setor!');

    invalidateInput(inputs.setor);

    return;
  }

  if (client.diaSemana === '0') {
    client.diaSemana = 'Segunda';
  }

  if (client.frequencia === '0') {
    client.frequencia = 'S';
  }

  client.sequencia = calcSequencia(client);
  client.latitude = getSessionStorageData('latitude');
  client.longitude = getSessionStorageData('longitude');
  client.razao = client.razao.toLowerCase();

  return client;
}
