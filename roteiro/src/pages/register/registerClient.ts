import { register } from '../../components/registerInputs';
import { apiPost } from '../../service/api.service';
import { getCep } from '../../service/cep.service';
import { Client } from '../../types/Client';
import { getLocation } from '../../utils/getLocation';
import { getSessionStorageData } from '../../utils/handleStorage';
import { removeInvalidChar, removeInvalidCharCep, removeInvalidCharPhone } from '../../utils/removeInvalidChar';
import { defineRoot } from '../../utils/defineRoot';
import { RegisterClientInputs } from '../../types/RegisterClientInputs';
import { validateNewClient } from '../../functions/validateNewClient';
import { maskBirth } from '../../utils/masks';

export async function registerClient() {
  const spot = defineRoot();

  getLocation();

  spot.innerHTML = register();

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
    abre: <HTMLInputElement>document.getElementById('abre-ipt')!,
    fecha: <HTMLInputElement>document.getElementById('fecha-ipt')!,

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

  setTimeout(() => {
    const latitude = getSessionStorageData('latitude');
    const longitude = getSessionStorageData('longitude');

    inputs.latitude.value = latitude;
    inputs.longitude.value = longitude;
  }, 1000);

  const saveClientBtn = document.getElementById('saveClient')!;

  saveClientBtn.addEventListener('click', async () => {
    const clients: Client[] = getSessionStorageData('clients');

    const nome = inputs.nome.value;
    let cpf = removeInvalidChar(inputs.cpf.value);
    const rg = removeInvalidChar(inputs.rg.value);
    const nascimento = removeInvalidChar(inputs.nascimento.value);
    const email = inputs.email.value.toLowerCase();
    const tel = removeInvalidCharPhone(inputs.tel.value);

    let cnpj = removeInvalidChar(inputs.cnpj.value);
    const ie = removeInvalidChar(inputs.ie.value);
    const razao = removeInvalidChar(inputs.razao.value);
    const fantasia = removeInvalidChar(inputs.fantasia.value);
    const abre = removeInvalidChar(inputs.abre.value);
    const fecha = removeInvalidChar(inputs.fecha.value);

    const cep = removeInvalidCharCep(inputs.cep.value);
    const endereco = removeInvalidChar(inputs.endereco.value);
    const numero = removeInvalidChar(inputs.numero.value);
    const bairro = removeInvalidChar(inputs.bairro.value);
    const cidade = removeInvalidChar(inputs.cidade.value);
    const estado = removeInvalidChar(inputs.estado.value);
    const setor = removeInvalidChar(inputs.setor.value);

    const diaSemana = inputs.diaSemana.value;
    const frequencia = inputs.frequencia.value;

    let latitude = Number(inputs.latitude.value);
    let longitude = Number(inputs.longitude.value);

    const newClient: Client = {
      nome,
      cpf,
      rg,
      nascimento,
      email,
      tel,
      latitude,
      longitude,
      cnpj,
      ie,
      razao,
      fantasia,
      abre,
      fecha,
      cep,
      endereco,
      numero,
      bairro,
      cidade,
      estado,
      setor,
      ativo: true,
      bloqueado: false,
      atendido: true,
      diaSemana,
      frequencia,
      sequencia: clients.length + 1,
    };

    let valid: boolean = validateNewClient(newClient, clients, inputs);

    if (valid === false) {
      return;
    } else {
      newClient.nascimento = maskBirth(newClient.nascimento);
      newClient.latitude = getSessionStorageData('latitude');
      newClient.longitude = getSessionStorageData('longitude');
      newClient.razao = newClient.razao.toLowerCase();

      await apiPost(`client`, newClient)
        .then(() => {
          alert('Cliente salvo com sucesso!');

          setTimeout(() => {
            registerClient();
          }, 3000);
        })
        .catch(() => {
          alert('Erro ao salvar cliente!\nRecarregue a página e tente novamente.');
        });
    }
  });
}
