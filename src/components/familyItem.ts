import { Family } from '../types/Family';
import { removeInvalidChar } from '../utils/removeInvalidChar';

export function familyItem(family: Family) {
  return `
<div class="accordion-item">
    <h2 class="accordion-header">
    <button
        class="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#${removeInvalidChar(family.nome)}"
        aria-expanded="false"
        aria-controls="${removeInvalidChar(family.nome)}">
        ${family.nome}
    </button>
    </h2>
    <div id="${removeInvalidChar(family.nome)}" class="accordion-collapse collapse" data-bs-parent="#content">
        <div class="accordion-body p-0 pt-1 family" id="${removeInvalidChar(family.nome)}Items"></div>
    </div>
</div>`;
}
