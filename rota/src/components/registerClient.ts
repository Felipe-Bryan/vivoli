import { validateNewClient } from '../functions/validateNewClient';
import { apiGet, apiPost } from '../service/api.service';
import { getCep } from '../service/cep.service';
import { Client } from '../types/Client';
import { RegisterClientInputs } from '../types/RegisterClientInputs';
import { getPosition } from '../utils/getLocation';
import { getSessionStorageData, getStorageData, saveToSessionStorage, saveToStorage } from '../utils/handleStorage';
import { removeInvalidChar, removeInvalidCharPhone } from '../utils/removeInvalidChar';

export async function registerClient() {
  const spot = document.getElementById('content')!;
  getPosition();

  spot.innerHTML = `<p class="h5 mx-2">Aguarde, carregando dados do servidor...</p>`;

  await apiGet()
    .then((data) => {
      saveToSessionStorage('clients', data.data);

      spot.innerHTML = '';
    })
    .catch(() => {
      alert('Erro de comunicação com o servidor');
    });

  let line = `
      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">CNPJ</span>
        <input
          type="text"
          id="cnpjIpt"
          class="form-control"
          placeholder="CNPJ"
          aria-label="CNPJ"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">CPF</span>
        <input
          type="text"
          id="cpfIpt"
          class="form-control"
          placeholder="CPF"
          aria-label="CPF"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Razão</span>
        <input
          type="text"
          id="razaoIpt"
          class="form-control"
          placeholder="Razão Social"
          aria-label="Razão Social"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Fantasia</span>
        <input
          type="text"
          id="fantasiaIpt"
          class="form-control"
          placeholder="Fantasia"
          aria-label="Fantasia"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">CEP</span>
        <input 
          type="text"
          id="cepIpt"
          class="form-control" 
          placeholder="CEP" 
          aria-label="CEP" 
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Endereço</span>
        <input
          type="text"
          id="enderecoIpt"
          class="form-control"
          placeholder="Endereço"
          aria-label="Endereço"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Numero</span>
        <input
          type="text"
          id="numeroIpt"
          class="form-control"
          placeholder="Numero"
          aria-label="Numero"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Cidade</span>
        <input
          type="text"
          id="cidadeIpt"
          class="form-control"
          placeholder="Cidade"
          aria-label="Cidade"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Bairro</span>
        <input
          type="text"
          id="bairroIpt"
          class="form-control"
          placeholder="Bairro"
          aria-label="Bairro"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Estado</span>
        <input
          type="text"
          id="estadoIpt"
          class="form-control"
          placeholder="Estado"
          aria-label="Estado"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Tel Cliente</span>
        <input
          type="text"
          id="telClienteIpt"
          class="form-control"
          placeholder="Tel Cliente"
          aria-label="Tel Cliente"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Vendedor</span>
        <input
          type="text"
          id="vendedorIpt"
          class="form-control"
          placeholder="Vendedor"
          aria-label="Vendedor"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Tel Vendedor</span>
        <input
          type="text"
          id="telVendedorIpt"
          class="form-control"
          placeholder="Tel Vendedor"
          aria-label="Tel Vendedor"
          aria-describedby="basic-addon1" />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Latitude</span>
        <input
          type="number"
          id="latitudeIpt"
          step="0.0000001"
          class="form-control"
          placeholder="Latitude"
          aria-label="Latitude"
          aria-describedby="basic-addon1"
          disabled />
      </div>

      <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">Longitude</span>
        <input
          type="number"
          id="longitudeIpt"
          step="0.0000001"
          class="form-control"
          placeholder="Longitude"
          aria-label="Longitude"
          aria-describedby="basic-addon1"
          disabled />
      </div>

      <div class="d-grid gap-2">
        <button class="btn btn-success mx-2 mb-2" type="button" id="saveClient">Salvar</button>
      </div>`;

  spot.innerHTML = line;

  const inputs: RegisterClientInputs = {
    cnpj: <HTMLInputElement>document.getElementById('cnpjIpt')!,
    cpf: <HTMLInputElement>document.getElementById('cpfIpt')!,
    razao: <HTMLInputElement>document.getElementById('razaoIpt')!,
    fantasia: <HTMLInputElement>document.getElementById('fantasiaIpt')!,
    cep: <HTMLInputElement>document.getElementById('cepIpt')!,
    endereco: <HTMLInputElement>document.getElementById('enderecoIpt')!,
    bairro: <HTMLInputElement>document.getElementById('bairroIpt')!,
    cidade: <HTMLInputElement>document.getElementById('cidadeIpt')!,
    estado: <HTMLInputElement>document.getElementById('estadoIpt')!,
    numero: <HTMLInputElement>document.getElementById('numeroIpt')!,
    telCliente: <HTMLInputElement>document.getElementById('telClienteIpt')!,
    vendedor: <HTMLInputElement>document.getElementById('vendedorIpt')!,
    telVendedor: <HTMLInputElement>document.getElementById('telVendedorIpt')!,
    latitude: <HTMLInputElement>document.getElementById('latitudeIpt')!,
    longitude: <HTMLInputElement>document.getElementById('longitudeIpt')!,
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

  const vendedor = getStorageData('vendedor');

  if (vendedor !== null) {
    inputs.vendedor.value = vendedor;
  }

  const telVendedor = getStorageData('telVendedor');

  if (telVendedor !== null) {
    inputs.telVendedor.value = telVendedor;
  }

  setTimeout(() => {
    const latitude = getSessionStorageData('latitude');
    const longitude = getSessionStorageData('longitude');

    inputs.latitude.value = latitude;
    inputs.longitude.value = longitude;
  }, 700);

  const saveClientBtn = document.getElementById('saveClient')!;

  saveClientBtn.addEventListener('click', async () => {
    const clients: Client[] = getSessionStorageData('clients');

    let cnpj = removeInvalidChar(inputs.cnpj.value);
    let cpf = removeInvalidChar(inputs.cpf.value);
    const razao = removeInvalidChar(inputs.razao.value);
    const fantasia = removeInvalidChar(inputs.fantasia.value);
    const telCliente = removeInvalidCharPhone(inputs.telCliente.value);
    const vendedor = removeInvalidChar(inputs.vendedor.value);
    const telVendedor = removeInvalidCharPhone(inputs.telVendedor.value);
    const endereco = removeInvalidChar(inputs.endereco.value);
    const numero = removeInvalidChar(inputs.numero.value);
    const bairro = removeInvalidChar(inputs.bairro.value);
    const cidade = removeInvalidChar(inputs.cidade.value);
    const estado = removeInvalidChar(inputs.estado.value);
    const cep = removeInvalidChar(inputs.cep.value);

    let latitude = Number(inputs.latitude.value);
    let longitude = Number(inputs.longitude.value);

    if (cnpj.length === 0) {
      cnpj = cpf;
    }

    if (cpf.length === 0) {
      cpf = '-';
    }

    const newClient: Client = {
      cnpj,
      cpf,
      razao,
      fantasia,
      telCliente,
      vendedor,
      telVendedor,
      endereco,
      numero,
      bairro,
      cidade,
      estado,
      cep,
      atendido: true,
      latitude,
      longitude,
      diaSemana: 'sabado',
    };

    const valid: boolean = validateNewClient(newClient, clients, inputs);

    saveToStorage('vendedor', newClient.vendedor);
    saveToStorage('telVendedor', newClient.telVendedor);

    if (valid === false) {
      console.log('break');

      return;
    } else {
      await apiPost(newClient)
        .then(() => {
          alert('Cliente salvo com sucesso!');
        })
        .catch(() => {
          alert('Erro ao salvar cliente!');
        });
    }
  });
}
