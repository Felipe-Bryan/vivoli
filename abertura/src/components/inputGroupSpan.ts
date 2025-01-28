import { inputIdGenerate } from '../utils/inputIdGenerate';

interface InputGroupSpanType {
  type: 'text' | 'number';
  title: string;
  spanTitle: string;
  spanId: string;
  value?: string;
  disabled?: boolean;
  step?: number;
}

export function inputGroupSpan(props: InputGroupSpanType) {
  const inputId = inputIdGenerate(props.title);

  return `
  <div class="input-group m-0 mb-2 px-2">
    <span class="input-group-text w-25">${props.title}</span>
    <input 
      type="${props.type}"
      id="${inputId}-ipt"
      class="form-control" 
      placeholder="${props.title}" 
      aria-label="${props.title}"
      ${props.value ? `value="${props.value}"` : ''}"
      ${props.step ? `step="${props.step}"` : ''} 
      ${props.disabled ? 'disabled' : ''} />
    <span class="input-group-text" id="${props.spanId}">${props.spanTitle}</span>          
  </div>`;
}
