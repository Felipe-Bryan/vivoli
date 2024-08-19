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
        <li id="home"><p class="m-0 p-0 mx-1">Início</p></li>
        <li id="newClient"><p class="m-0 p-0 mx-1">Cadastrar cliente</p></li>
        <li><p class="m-0 p-0 mx-1">Item</p></li>
        </ul>
    </div>
    </div>
</nav>

<div id="content"></div>`;
}
