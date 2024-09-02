import { inputs } from '../components/inputs';
import { Client } from '../types/Client';
import { invalidateInput } from '../utils/invalidateInput';
import { removeInvalidChar, removeInvalidCharPhone } from '../utils/removeInvalidChar';
import { calcSequencia } from './calcSequencia';

export function validate(client: Client) {
  if (client.nome.length === 0) {
    alert('informe o nome do cliente');

    invalidateInput(inputs.nome);

    return;
  }

  if (client.cpf.length === 0) {
    client.cpf = '-';
  }

  if (client.rg.length === 0) {
    client.rg = '0';
  }

  if (client.nascimento.length === 0) {
    client.nascimento = '00000000';
  }

  if (client.email.length === 0) {
    client.email = '-';
  } else {
    client.email = removeInvalidChar(client.email);
  }

  if (client.tel.length === 0) {
    client.tel = '0';
  } else {
    client.tel = removeInvalidCharPhone(client.tel);
  }

  if (client.cnpj.length === 0 && client.cpf === '-') {
    alert('Informe ao menos um identificador para o cliente (CPF ou CNPJ)');

    invalidateInput(inputs.cpf);
    invalidateInput(inputs.cnpj);

    return;
  } else if (client.cnpj.length === 0 && client.cpf !== '-') {
    client.cnpj = client.cpf;
  }

  if (client.ie.length === 0) {
    client.ie = '0';
  }

  if (client.razao.length === 0) {
    client.razao = removeInvalidChar(client.nome);
  }

  if (client.fantasia.length === 0) {
    client.fantasia = '-';
  }

  if (client.abre.length === 0) {
    client.abre = '00:00';
  }

  if (client.fecha.length === 0) {
    client.fecha = '00:00';
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

  if (client.setor.length === 0) {
    alert('Informe o setor do cliente');

    return;
  }

  if (client.diaSemana === '0') {
    client.diaSemana = 'Segunda';
  }

  if (client.frequencia === '0') {
    client.frequencia = 'S';
  }

  client.sequencia = calcSequencia(client);

  return client;
}
