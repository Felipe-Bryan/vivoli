interface InputGroupSpanType {
  type: 'text' | 'number' | 'password' | 'email';
  title: string;
  spanText: string;
  spanId: string;
  inputId: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  step?: number;
}

export function inputGroupSpan(props: InputGroupSpanType) {
  return `
<div class="input-group mb-2">
  <span class="input-group-text w-25">${props.title}</span>
    <input
        type="${props.type}"
        id="${props.inputId}-ipt"
        class="form-control"
        value="${props.value ? `${props.value}` : ``}"
        placeholder="${props.placeholder ? `${props.placeholder}` : `${props.title}`}"
        ${props.disabled ? 'disabled' : ''}
        ${props.step ? `step="${props.step}"` : ''} />
  <span class="input-group-text" id="${props.spanId}">${props.spanText}</span>
</div>`;
}
