export function mainComponent() {
  return `
<nav class="navbar p-0 d-flex justify-content-between">
    <div class="container">
    <a class="navbar-brand" href="#">
        <img src="./dist/assets/images/logo.png" alt="Logo" class="img-logo" />
    </a>
    <div class="btn-group dropstart p-0" id="menuBtn">
        <button
        class="btn btn-secondary dropdown-toggle p-0 px-3 py-1"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        <i class="bi bi-list fs-5"></i>
        </button>
        <ul class="dropdown-menu">
        <li id="home"><p class="m-0 p-0 py-1 mx-1">Início</p></li>
        <li id="newClient"><p class="m-0 p-0 py-1 mx-1">Cadastrar cliente</p></li>
        <li id="manageClient"><p class="m-0 p-0 py-1 mx-1">Gerenciar clientes</p></li>
        <li id="logout"><p class="m-0 p-0 py-1 mx-1">Logout</p></li>
        </ul>
    </div>
    </div>
</nav>

<div id="content"></div>

<div class="modal fade" id="modal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalLabel"></h1>
                <button type="button" class="btn-close" id="closeModal" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="modalContent"></div>
            <div class="modal-footer" id="modalFooter">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-success" id="saveEdit">Salvar</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="modal2" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalLabel2"></h1>
            </div>
            <div class="modal-body" id="modalContent2"></div>
            <div class="modal-footer" id="modalFooter2">
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modal">Voltar</button>
                <button type="button" class="btn btn-success" id="saveInfo">Salvar</button>
            </div>
        </div>
    </div>
</div>`;
}
