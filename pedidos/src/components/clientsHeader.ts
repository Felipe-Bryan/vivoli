export function clientsHeader() {
  return `
    <div class="d-flex justify-content-around m-0 mb-2 p-0">
          <button type="button" class="btn btn-primary" id="home">Início</button>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" id="newClient">
            Novo Cliente
          </button>
        </div>
  
        <div class="container" id="pageContent"></div>`;
}
