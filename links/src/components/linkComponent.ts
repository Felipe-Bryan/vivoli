import { url } from '../pages/home/startHome';
import { Button } from './base-components/Button';

interface LinkProps {
  id: string;
  label: string;
  copyBtn?: boolean;
}

export function linkComponent(props: LinkProps) {
  return `
<div class="border-bottom mb-1">
  <div class="row">
      <div class="col text-center mb-1 fw-bold">${props.label}</div>
  </div>
  <div class="row">
      <a target="_blank" class="col text-center mb-1 text-primary link" id="${props.id}">
        ${url}/${props.id}/?t=
      </a>
  </div>

  ${props.copyBtn ? `${btnCopy(props.id)}` : ''}

</div>`;
}

function btnCopy(id: string) {
  return `
  <div class="row">
      <div class="col text-center">${Button({
        color: 'success',
        id: `copy${id}`,
        label: 'Copiar',
        additionalClass: 'w-75 copyBtn',
      })}
      </div>
  </div>`;
}
