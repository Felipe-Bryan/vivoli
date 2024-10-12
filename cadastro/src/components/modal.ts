interface ModalProps {
  label: string;
  body: string;
}

export function alertModal(props: ModalProps) {
  document.getElementById('modalLabel')!.innerHTML = props.label;
  document.getElementById('modalBody')!.innerHTML = props.body;
  document.getElementById('modalFooter')!.innerHTML = `
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>`;
}

export function modalToggle() {
  const toggle = document.getElementById('openModal')!;

  toggle.click();
}

// <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
// <button type="button" class="btn btn-primary">Save changes</button>
