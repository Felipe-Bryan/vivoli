export function loginForm() {
  return `
      <div class="vh-100 d-flex align-items-center">
        <div class="container">
          <form action="submit">
            <div class="row">
              <a class="navbar-brand text-center m-0 mb-2 p-0">
                <img src="./dist/assets/images/logo.png" alt="Logo" class="img-logo" />
              </a>
            </div>
            <div class="row">
              <div class="input-group mb-3">
                <span class="input-group-text w-25">Setor</span>
                <input
                  type="text"
                  id="setor-ipt"
                  class="form-control"
                  placeholder="Setor"
                  aria-label="Setor"
                  aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="row">
              <div class="input-group mb-3">
                <span class="input-group-text w-25">Senha</span>
                <input
                  type="password"
                  id="senha-ipt"
                  class="form-control"
                  placeholder="Senha"
                  aria-label="Senha"
                  aria-describedby="basic-addon1" />
                <span class="input-group-text" id="passIcon"><i class="bi bi-eye-slash"></i></span>
              </div>
            </div>

            <div class="row">
              <div class="d-grid gap-2 p-0">
                <button class="btn btn-secondary mx-2 mb-2" type="button" id="loginBtn">Entrar</button>
              </div>
            </div>
          </form>
        </div>
      </div>`;
}
