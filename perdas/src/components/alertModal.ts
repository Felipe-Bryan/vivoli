export function alertModal(title: string, body: string, returnOption: string, followOption?: string) {
  document.getElementById('alertModalLabel')!.innerHTML = title;

  document.getElementById('modalBody')!.innerHTML = body;

  if (followOption) {
    document.getElementById('modalFooter')!.innerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${returnOption}</button>
    <button type="button" class="btn btn-primary" id="modalFollow">${followOption}</button>
    `;
  } else {
    document.getElementById('modalFooter')!.innerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="returnOption">${returnOption}</button>`;
  }
}
