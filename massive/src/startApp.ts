import { register } from './components/registerInputs';
import { root } from './components/root';
import { SelectOptionItem } from './components/selectForm';
import { validate } from './functions/validate';
import { apiGet, apiPost } from './service/api.service';
import { Client } from './types/Client';
import { RegisterClientInputs } from './types/RegisterClientInputs';
import { getSessionStorageData, saveToSessionStorage } from './utils/handleStorage';
import { setHourString } from './utils/setHourString';

export async function startApp() {
  await apiGet('client').then((data) => {
    saveToSessionStorage('clients', data.data);
  });

  await apiGet('setor').then((data) => {
    const result = data.data;

    let setores: SelectOptionItem[] = [];

    result.forEach((setor: any) => {
      setores.push({
        value: setor.nome,
        text: `Setor ${setor.nome}`,
      });
    });

    saveToSessionStorage('setores', setores);
  });

  root.innerHTML = register();

  const saveClientBtn = document.getElementById('saveClient')!;

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

  saveClientBtn.addEventListener('click', async () => {
    const clients = getSessionStorageData('clients');

    const nome = inputs.nome.value;
    const cpf = inputs.cpf.value;
    const rg = inputs.rg.value;
    const nascimento = inputs.nascimento.value;
    const email = inputs.email.value;
    const tel = inputs.tel.value;

    const cnpj = inputs.cnpj.value;
    const ie = inputs.ie.value;
    const razao = inputs.endereco.value;
    const fantasia = inputs.fantasia.value;
    const abre = setHourString(Number(inputs.abreH.value), Number(inputs.abreM.value));
    const fecha = setHourString(Number(inputs.fechaH.value), Number(inputs.fechaM.value));

    const cep = inputs.cep.value;
    const endereco = inputs.endereco.value;
    const numero = inputs.numero.value;
    const bairro = inputs.bairro.value;
    const cidade = inputs.cidade.value;
    const estado = inputs.estado.value;

    const setor = inputs.setor.value;

    const diaSemana = inputs.diaSemana.value;
    const frequencia = inputs.frequencia.value;

    const newClient: Client = {
      nome,
      cpf,
      rg,
      nascimento,
      email,
      tel,

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

      atendido: '-',
      diaSemana,
      frequencia,
      sequencia: clients.length + 1,

      latitude: 0,
      longitude: 0,
    };

    const clientToSave = validate(newClient);

    if (!clientToSave) {
      console.log('Falha');
    } else {
      await apiPost('client', clientToSave)
        .then(() => {
          startApp();
        })
        .catch(() => {
          alert('Falha ao salvar cliente, tente novamente mais tarde');
        });
    }
  });
}
