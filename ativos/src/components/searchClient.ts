export function searchClient() {
  return `
<div class="input-group m-0 mb-3 px-2">
  <span class="input-group-text w-25">Pesquisar</span>
  <input 
    id="search-ipt" 
    type="text" 
    class="form-control" 
    placeholder="ID Ativo" 
    aria-label="ID Ativo" 
    aria-describedby="basic-addon1" />
  <span class="input-group-text" id="searchClient"><i class="bi bi-search"></i></span>
</div>

<div class="m-1 p-0 px-2 card bg-light border rounded shadow" id="result"></div>`;
}
