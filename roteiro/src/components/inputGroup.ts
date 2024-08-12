import { inputIdGenerate } from '../utils/removeInvalidChar';

interface InputGroupType {
  type: 'text' | 'number' | 'password' | 'email';
  title: string;
  value?: string;
  disabled?: boolean;
  step?: number;
}

export function inputGroup(props: InputGroupType) {
  const inputId = inputIdGenerate(props.title);

  if (props.value) {
    return `
    <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">${props.title}</span>
        <input
            type="${props.type}"
            id="${inputId}-ipt"
            value="${props.value}"
            class="form-control"
            placeholder="${props.title}"
            ${props.disabled ? 'disabled' : ''}
            ${props.step ? `step="${props.step}"` : ''} />
    </div>`;
  } else {
    return `
    <div class="input-group m-0 mb-2 px-2">
        <span class="input-group-text w-25">${props.title}</span>
        <input
            type="text"
            id="${inputId}-ipt"
            class="form-control"
            placeholder="${props.title}"
            ${props.disabled ? 'disabled' : ''}
            ${props.step ? `step="${props.step}"` : ''} />
    </div>`;
  }
}
