import { RegisterClientInputs } from '../types/RegisterClientInputs';

export const inputs: RegisterClientInputs = {
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
