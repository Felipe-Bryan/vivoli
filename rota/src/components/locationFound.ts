import { Client } from '../types/Client';
import { mapLinker } from '../utils/mapLinker';

export function locationFound(client: Client) {
  const spot = document.getElementById('result')!;

  spot.innerHTML = '';

  let line = `
        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Razão</span>
          <input
            type="text"
            id="razaoIpt"
            class="form-control"
            placeholder="Razão Social"
            aria-label="Razão Social"
            value="${client.razao}"
            disabled />
        </div>

        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Endereço</span>
          <input
            type="text"
            id="enderecoIpt"
            class="form-control"
            placeholder="Endereço"
            aria-label="Endereço"
            value="${client.endereco}"
            disabled />
        </div>
  
        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Número</span>
          <input
            type="text"
            id="numeroIpt"
            class="form-control"
            placeholder="Número"
            aria-label="Número"
            value="${client.numero}"
            disabled />
        </div>

        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Bairro</span>
          <input
            type="text"
            id="bairroIpt"
            class="form-control"
            placeholder="Bairro"
            aria-label="Bairro"
            value="${client.bairro}"
            disabled />
        </div>
  
        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Cidade</span>
          <input
            type="text"
            id="cidadeIpt"
            class="form-control"
            placeholder="Cidade"
            aria-label="Cidade"
            value="${client.cidade}"
            disabled />
        </div>

        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Estado</span>
          <input
            type="text"
            id="estadoIpt"
            class="form-control"
            placeholder="Estado"
            aria-label="Estado"
            value="${client.estado}"
            disabled />
        </div>        
  
        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">CEP</span>
          <input 
              type="text" 
              id="cepIpt"
              class="form-control" 
              placeholder="CEP" 
              aria-label="CEP" 
              value="${client.cep}"
              disabled />
        </div>

        <div class="d-flex justify-content-end m-2">
          <button type="button" class="btn btn-secondary" id="toMap">Ver no mapa <i class="bi bi-geo-alt-fill"></i></button>
        </div>

        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Vendedor</span>
          <input 
              type="text" 
              id="vendedorIpt"
              class="form-control" 
              placeholder="Vendedor" 
              aria-label="Vendedor" 
              value="${client.vendedor}"
              disabled />
        </div>
        
        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Tel Vendedor</span>
          <input 
              type="text"
              id="telVendedorIpt"
              class="form-control" 
              placeholder="Tel Vendedor" 
              aria-label="Tel Vendedor" 
              value="${client.telVendedor}"
              disabled />
          <span class="input-group-text" id="callVendedor"><i class="bi bi-whatsapp text-success"></i></span>          
        </div>
        
        <div class="input-group m-0 mb-2 px-2">
          <span class="input-group-text w-25">Tel Cliente</span>          
          <input 
              type="text"
              id="telClienteIpt"
              class="form-control" 
              placeholder="Tel Cliente" 
              aria-label="Tel Cliente" 
              value="${client.telCliente}"
              disabled />
          <span class="input-group-text" id="callClient"><i class="bi bi-whatsapp text-success"></i></span>
        </div>`;

  spot.innerHTML = line;

  const toMapBtn = document.getElementById('toMap')!;

  toMapBtn.addEventListener('click', () => {
    window.open(mapLinker(client), '_blank');
  });

  const callVendedorBtn = document.getElementById('callVendedor')!;

  callVendedorBtn.addEventListener('click', () => {
    window.open(`https://wa.me/55${client.telVendedor}`, '_blank');
  });

  const callClientBtn = document.getElementById('callClient')!;

  callClientBtn.addEventListener('click', () => {
    window.open(`https://wa.me/55${client.telCliente}`, '_blank');
  });
}
