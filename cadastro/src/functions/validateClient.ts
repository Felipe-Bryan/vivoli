import { Client } from '../types/Client';
import { invalidateInput } from '../utils/invalidateInput';

export function validateClient() {
  const nomeIpt = <HTMLInputElement>document.getElementById('nome-ipt')!;
  const cpfIpt = <HTMLInputElement>document.getElementById('cpf-ipt')!;
  const rgIpt = <HTMLInputElement>document.getElementById('rg-ipt')!;
  const nascimentoIpt = <HTMLInputElement>document.getElementById('nascimento-ipt')!;
  const cepRIpt = <HTMLInputElement>document.getElementById('cep-ipt')!;
  const enderecoRIpt = <HTMLInputElement>document.getElementById('endereco-ipt')!;
  const numeroRIpt = <HTMLInputElement>document.getElementById('numero-ipt')!;
  const bairroRIpt = <HTMLInputElement>document.getElementById('bairro-ipt')!;
  const cidadeRIpt = <HTMLInputElement>document.getElementById('cidade-ipt')!;
  const estadoRIpt = <HTMLInputElement>document.getElementById('estado-ipt')!;
  const telRIpt = <HTMLInputElement>document.getElementById('telefone-ipt')!;
  const emailIpt = <HTMLInputElement>document.getElementById('email-ipt')!;
  const tipoIpt = <HTMLInputElement>document.getElementById('tipo-ipt')!;
  const razaoIpt = <HTMLInputElement>document.getElementById('razao-ipt')!;
  const fantasiaIpt = <HTMLInputElement>document.getElementById('fantasia-ipt')!;
  const cnpjIpt = <HTMLInputElement>document.getElementById('cnpj-ipt')!;
  const ieIpt = <HTMLInputElement>document.getElementById('ie-ipt')!;
  const cepCIpt = <HTMLInputElement>document.getElementById('cepc-ipt')!;
  const enderecoCIpt = <HTMLInputElement>document.getElementById('enderecoc-ipt')!;
  const numeroCIpt = <HTMLInputElement>document.getElementById('numeroc-ipt')!;
  const bairroCIpt = <HTMLInputElement>document.getElementById('bairroc-ipt')!;
  const cidadeCIpt = <HTMLInputElement>document.getElementById('cidadec-ipt')!;
  const estadoCIpt = <HTMLInputElement>document.getElementById('estadoc-ipt')!;
  const telCIpt = <HTMLInputElement>document.getElementById('telefonec-ipt')!;

  const newClient: Client = {
    nome: nomeIpt.value,
    cpf: cpfIpt.value,
    rg: rgIpt.value,
    nascimento: nascimentoIpt.value,
    cepR: cepRIpt.value,
    enderecoR: enderecoRIpt.value,
    numeroR: numeroRIpt.value,
    bairroR: bairroRIpt.value,
    cidadeR: cidadeRIpt.value,
    estadoR: estadoRIpt.value,
    email: emailIpt.value,
    tel: telRIpt.value,
    tipo: tipoIpt.value,
    cnpj: cnpjIpt.value,
    ie: ieIpt.value,
    razao: razaoIpt.value,
    fantasia: fantasiaIpt.value,
    telC: telCIpt.value,
    cepC: cepCIpt.value,
    enderecoC: enderecoCIpt.value,
    numeroC: numeroCIpt.value,
    bairroC: bairroCIpt.value,
    cidadeC: cidadeCIpt.value,
    estadoC: estadoCIpt.value,
  };

  if (newClient.nome === '') {
    alert('Informe o Nome!');

    invalidateInput(nomeIpt);

    return;
  }

  if (newClient.cpf === '') {
    alert('Informe o CPF!');

    invalidateInput(cpfIpt);

    return;
  }

  if (newClient.cpf.length !== 11) {
    alert('CPF Inválido!\nInforme um CPF com 11 dígitos');

    invalidateInput(cpfIpt);

    return;
  }

  if (newClient.rg === '') {
    alert('Informe o RG!');

    invalidateInput(rgIpt);

    return;
  }

  if (newClient.nascimento === '') {
    alert('Informe o Nascimento!');

    invalidateInput(nascimentoIpt);

    return;
  }

  if (newClient.cepR === '') {
    alert('Informe o CEP!');

    invalidateInput(cepRIpt);

    return;
  }

  if (newClient.enderecoR === '') {
    alert('Informe o Endereço!');

    invalidateInput(enderecoRIpt);

    return;
  }

  if (newClient.numeroR === '') {
    alert('Informe o Número!');

    invalidateInput(numeroRIpt);

    return;
  }

  if (newClient.bairroR === '') {
    alert('Informe o Bairro!');

    invalidateInput(bairroRIpt);

    return;
  }

  if (newClient.cidadeR === '') {
    alert('Informe a Cidade!');

    invalidateInput(cidadeRIpt);

    return;
  }

  if (newClient.estadoR === '') {
    alert('Informe o Estado!');

    invalidateInput(estadoRIpt);

    return;
  }

  if (newClient.email === '') {
    alert('Informe o Email!');

    invalidateInput(emailIpt);

    return;
  }

  if (newClient.tel === '') {
    alert('Informe o Telefone!');

    invalidateInput(telRIpt);

    return;
  }

  if (newClient.tipo === '0') {
    alert('Selecione o tipo de estabelecimento!');

    invalidateInput(tipoIpt);

    return;
  }

  if (newClient.cnpj === '') {
    const confirmation = confirm('CNPJ não informado!\nProsseguir apenas com CPF?');

    if (confirmation) {
      newClient.cnpj = newClient.cpf;
      newClient.ie = newClient.rg;
      newClient.razao = newClient.nome;
    } else {
      invalidateInput(cnpjIpt);

      return;
    }
  }

  if (newClient.ie === '') {
    alert(
      `Informe a Inscrição estadual!
      \nPode ser encontrada em notas de fornecedores ou no site: 
      \nhttp://www.sintegra.gov.br/ 
      \natravés do CNPJ.`
    );

    invalidateInput(ieIpt);

    return;
  }

  if (newClient.razao === '') {
    alert('Informe a Razão Social!');

    invalidateInput(razaoIpt);

    return;
  }

  if (newClient.fantasia === '') {
    alert('Informe o Nome fantasia!');

    invalidateInput(fantasiaIpt);

    return;
  }

  if (newClient.telC === '') {
    alert('Informe o Telefone Comercial!');

    invalidateInput(telCIpt);

    return;
  }

  if (newClient.cepC === '') {
    alert('Informe o CEP Comercial!');

    invalidateInput(cepCIpt);

    return;
  }

  if (newClient.enderecoC === '') {
    alert('Informe o Endereco Comercial!');

    invalidateInput(enderecoCIpt);

    return;
  }

  if (newClient.numeroC === '') {
    alert('Informe o Número do endereço Comercial!');

    invalidateInput(numeroCIpt);

    return;
  }

  if (newClient.bairroC === '') {
    alert('Informe o Bairro do endereço comercial!');

    invalidateInput(bairroCIpt);

    return;
  }

  if (newClient.cidadeC === '') {
    alert('Informe a Cidade do endereço comercial!');

    invalidateInput(cidadeCIpt);

    return;
  }

  if (newClient.estadoC === '') {
    alert('Informe o Estado do endereço comercial!');

    invalidateInput(estadoCIpt);

    return;
  }

  return newClient;
}
