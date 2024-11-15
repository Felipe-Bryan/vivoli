interface ModalProps {
  label: string;
  body: string;
  footer: string;
}

export function modal(props: ModalProps) {
  document.getElementById('modalLabel')!.innerHTML = props.label;
  document.getElementById('modalBody')!.innerHTML = props.body;
  document.getElementById('modalFooter')!.innerHTML = props.footer;
}

export function modalClose() {
  const btn = document.getElementById('modalClose')!;

  btn.click();
}
