import { inputIdGenerate } from '../utils/inputIdGenerate';

interface InputGroupType {
  type: 'text' | 'number';
  title: string;
  value?: string;
  disabled?: boolean;
  step?: number;
}

export function inputGroup(props: InputGroupType) {
  const inputId = inputIdGenerate(props.title);

  return `
<div class="input-group m-0 mb-2 px-2">
  <span class="input-group-text w-25">${props.title}</span>
  <input
    type="${props.type}"
    id="${inputId}-ipt"
    class="form-control"
    placeholder="${props.title}"
    ${props.value ? `value="${props.value}"` : ''}"
    ${props.disabled ? 'disabled' : ''}
    ${props.step ? `step="${props.step}"` : ''} />
</div>`;
}
