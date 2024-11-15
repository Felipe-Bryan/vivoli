import { Family } from '../types/Family';

export function familyItem(family: Family) {
  return `
<div class="accordion-item">
    <h2 class="accordion-header">
    <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${`family${family.id}`}"
        aria-expanded="false"
        aria-controls="${`family${family.id}`}">
        ${family.nome}
    </button>
    </h2>
    <div id="${`family${family.id}`}" class="accordion-collapse collapse" data-bs-parent="#newOrderContent">
        <div class="accordion-body p-0 pt-1 family" id="${family.id}Items"></div>
    </div>
</div>`;
}
