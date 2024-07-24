import { apiPost } from '../service/api.service';
import { getCep } from '../service/cep.service';
import { Client } from '../types/Client';
import { getPosition } from '../utils/getLocation';
import { getSessionStorageData, getStorageData, saveToStorage } from '../utils/handleStorage';
import { removeInvalidChar, removeInvalidCharPhone } from '../utils/removeInvalidChar';

export function registerClient() {
  const spot = document.getElementById('content')!;
  getPosition();

  spot.innerHTML = '';

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

  const cnpjIpt = <HTMLInputElement>document.getElementById('cnpjIpt')!;
  const razaoIpt = <HTMLInputElement>document.getElementById('razaoIpt')!;
  const fantasiaIpt = <HTMLInputElement>document.getElementById('fantasiaIpt')!;

  const cepIpt = <HTMLInputElement>document.getElementById('cepIpt')!;
  const enderecoIpt = <HTMLInputElement>document.getElementById('enderecoIpt')!;
  const bairroIpt = <HTMLInputElement>document.getElementById('bairroIpt')!;
  const cidadeIpt = <HTMLInputElement>document.getElementById('cidadeIpt')!;
  const estadoIpt = <HTMLInputElement>document.getElementById('estadoIpt')!;
  const numeroIpt = <HTMLInputElement>document.getElementById('numeroIpt')!;

  const telClienteIpt = <HTMLInputElement>document.getElementById('telClienteIpt')!;
  const vendedorIpt = <HTMLInputElement>document.getElementById('vendedorIpt')!;
  const telVendedorIpt = <HTMLInputElement>document.getElementById('telVendedorIpt')!;

  const latitudeIpt = <HTMLInputElement>document.getElementById('latitudeIpt')!;
  const longitudeIpt = <HTMLInputElement>document.getElementById('longitudeIpt')!;

  cepIpt.addEventListener('change', async () => {
    const cep = removeInvalidChar(cepIpt.value);

    await getCep(cep)
      .then((data: any) => {
        if (data) {
          enderecoIpt.value = data.street;
          bairroIpt.value = data.district;
          cidadeIpt.value = data.city;
          estadoIpt.value = data.stateShortname;
        }
      })
      .catch(() => {
        console.log('Não encontrado');
      });
  });

  const vendedor = getStorageData('vendedor');

  if (vendedor !== null) {
    vendedorIpt.value = vendedor;
  }

  const telVendedor = getStorageData('telVendedor');

  if (telVendedor !== null) {
    telVendedorIpt.value = telVendedor;
  }

  setTimeout(() => {
    const latitude = getSessionStorageData('latitude');
    const longitude = getSessionStorageData('longitude');

    latitudeIpt.value = latitude;
    longitudeIpt.value = longitude;
  }, 700);

  const saveClientBtn = document.getElementById('saveClient')!;

  saveClientBtn.addEventListener('click', async () => {
    const newClient: Client = {
      cnpj: removeInvalidChar(cnpjIpt.value),
      razao: removeInvalidChar(razaoIpt.value),
      fantasia: removeInvalidChar(fantasiaIpt.value),
      telCliente: removeInvalidCharPhone(telClienteIpt.value),
      vendedor: removeInvalidChar(vendedorIpt.value),
      telVendedor: removeInvalidCharPhone(telVendedorIpt.value),
      endereco: removeInvalidChar(enderecoIpt.value),
      numero: removeInvalidChar(numeroIpt.value),
      bairro: removeInvalidChar(bairroIpt.value),
      cidade: removeInvalidChar(cidadeIpt.value),
      estado: removeInvalidChar(estadoIpt.value),
      cep: removeInvalidChar(cepIpt.value),
      atendido: true,
      latitude: Number(latitudeIpt.value),
      longitude: Number(longitudeIpt.value),
      diaSemana: 'Sábado',
    };

    saveToStorage('vendedor', newClient.vendedor);
    saveToStorage('telVendedor', newClient.telVendedor);

    await apiPost(newClient)
      .then(() => {
        alert('Cliente salvo com sucesso!');
      })
      .catch(() => {
        alert('Erro ao salvar cliente!');
      });
  });
}
