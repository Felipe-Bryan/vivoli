import { Client } from '../types/Client';
import { RegisterClientInputs } from '../types/RegisterClientInputs';
import { getSessionStorageData } from '../utils/handleStorage';
import { invalidateInput } from '../utils/invalidateInput';

export function validateNewClient(client: Client, clients: Client[], inputs: RegisterClientInputs): boolean {
  if (client.nome.length === 0) {
    alert('Informe o nome do cliente!');

    invalidateInput(inputs.nome);

    return false;
  }

  if (client.cpf.length === 0) {
    alert('Informe o CPF do cliente!');

    invalidateInput(inputs.cpf);

    return false;
  }

  if (client.rg.length === 0) {
    alert('Informe o RG do cliente!');

    invalidateInput(inputs.rg);

    return false;
  }

  if (client.nascimento.length === 0) {
    alert('Informe a data de nascimento do cliente!');

    invalidateInput(inputs.nascimento);

    return false;
  }

  if (client.email.length === 0) {
    alert('Informe o e-mail do cliente!');

    invalidateInput(inputs.email);

    return false;
  }

  if (client.telCliente.length === 0) {
    alert('Informe o telefone do cliente!');

    invalidateInput(inputs.telCliente);

    return false;
  }

  if (client.cnpj.length === 0) {
    const confirmation = confirm('CNPJ não informado, deseja prosseguir apenas com CPF?');

    if (confirmation) {
      client.razao = client.nome;
      client.cnpj = client.cpf;
      client.ie = client.rg;

      inputs.razao.value = client.nome;
      inputs.ie.value = client.rg;
      inputs.cnpj.value = client.cpf;
    } else {
      invalidateInput(inputs.cnpj);

      return false;
    }
  }

  if (client.razao.length === 0) {
    alert('Informe a razão social!');

    invalidateInput(inputs.razao);

    return false;
  }

  if (client.fantasia.length === 0) {
    alert('Informe o Nome fantasia!');

    invalidateInput(inputs.fantasia);

    return false;
  }

  if (client.cep.length === 0) {
    alert('Informe o CEP!');

    invalidateInput(inputs.cep);

    return false;
  }

  if (client.endereco.length === 0) {
    alert('Informe o endereço!');

    invalidateInput(inputs.endereco);

    return false;
  }

  if (client.numero.length === 0) {
    alert('Informe o número!');

    invalidateInput(inputs.numero);

    return false;
  }

  if (client.cidade.length === 0) {
    alert('Informe a cidade!');

    invalidateInput(inputs.cidade);

    return false;
  }

  if (client.bairro.length === 0) {
    alert('Informe o bairro!');

    invalidateInput(inputs.bairro);

    return false;
  }

  if (client.estado.length === 0) {
    alert('Informe o estado!');

    invalidateInput(inputs.estado);

    return false;
  } else if (client.estado.length > 2) {
    alert('Informe apenas a sigla do estado!');

    invalidateInput(inputs.estado);

    return false;
  }

  client.latitude = getSessionStorageData('latitude');

  client.longitude = getSessionStorageData('longitude');

  return true;
}
