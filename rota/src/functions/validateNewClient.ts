import { Client } from '../types/Client';
import { RegisterClientInputs } from '../types/RegisterClientInputs';
import { getSessionStorageData } from '../utils/handleStorage';
import { invalidateInput } from '../utils/invalidateInput';

export function validateNewClient(client: Client, clients: Client[], inputs: RegisterClientInputs): boolean {
  if (client.cnpj.length === 14) {
    const cnpjFound = clients.find((item) => item.cnpj === client.cnpj);

    if (cnpjFound) {
      alert('CNPJ já cadastrado');

      invalidateInput(inputs.cnpj);

      return false;
    }
  } else if (client.cnpj.length > 14) {
    alert('CNPJ inválido');

    return false;
  }

  if (client.cpf.length === 0 && client.cnpj.length === 0) {
    alert('Deve informar um CPF ou CNPJ!');

    invalidateInput(inputs.cpf);
    invalidateInput(inputs.cnpj);

    return false;
  }

  if (client.razao.length === 0) {
    alert('Deve informar a razão social!');

    invalidateInput(inputs.razao);

    return false;
  }

  if (client.fantasia.length === 0) {
    alert('Deve informar o Nome fantasia!');

    invalidateInput(inputs.fantasia);

    return false;
  }

  if (client.cep.length === 0) {
    alert('Deve informar o CEP!');

    invalidateInput(inputs.cep);

    return false;
  }

  if (client.endereco.length === 0) {
    alert('Deve informar o endereço!');

    invalidateInput(inputs.endereco);

    return false;
  }

  if (client.numero.length === 0) {
    alert('Deve informar o número!');

    invalidateInput(inputs.numero);

    return false;
  }

  if (client.cidade.length === 0) {
    alert('Deve informar a cidade!');

    invalidateInput(inputs.cidade);

    return false;
  }

  if (client.bairro.length === 0) {
    alert('Deve informar o bairro!');

    invalidateInput(inputs.bairro);

    return false;
  }

  if (client.estado.length === 0) {
    alert('Deve informar o estado!');

    invalidateInput(inputs.estado);

    return false;
  } else if (client.estado.length > 2) {
    alert('Informe apenas a sigla do estado!');

    invalidateInput(inputs.estado);

    return false;
  }

  if (client.telCliente.length === 0) {
    alert('Deve informar o telefone do cliente!');

    invalidateInput(inputs.telCliente);

    return false;
  }

  if (client.vendedor.length === 0) {
    alert('Deve informar o vendedor!');

    invalidateInput(inputs.vendedor);

    return false;
  }

  if (client.telVendedor.length === 0) {
    alert('Deve informar o telefone do vendedor!');

    invalidateInput(inputs.telVendedor);

    return false;
  }

  if (client.latitude === undefined) {
    client.latitude = getSessionStorageData('latitude');
  }

  if (client.longitude === undefined) {
    client.longitude = getSessionStorageData('longitude');
  }

  return true;
}
