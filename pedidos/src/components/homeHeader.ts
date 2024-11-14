export function homeHeader() {
  return `
      <div class="d-flex justify-content-around m-0 mb-2 p-0">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal" id="filter">
          Filtros
        </button>
        <button type="button" class="btn btn-primary" id="newOrder">Novo Pedido</button>
        <button type="button" class="btn btn-primary" id="viewClients">Clientes</button>
      </div>

      <div class="container"></div>`;
}
