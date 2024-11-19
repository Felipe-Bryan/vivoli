export function homeHeader() {
  return `
<div class="d-flex justify-content-end m-0 mb-2 p-0 px-2">        
  <button type="button" class="btn btn-primary p-1 px-2 mx-2" id="viewHistory">Histórico</button>
  
  <button type="button" class="btn btn-primary p-1 px-2" data-bs-toggle="modal" data-bs-target="#modal" id="register">
    Cadastrar Cliente
  </button>
</div>

<div class="d-flex justify-content-center m-0 mb-2 p-0 px-2">
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">Pesquisar</span>
    <input type="text" class="form-control" placeholder="CPF/ CNPJ" id="searchIpt"/>
  </div>  
</div>

<div class="container" id="pageContent"></div>`;
}

// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" id="filter">
//  Filtros
// </button>
