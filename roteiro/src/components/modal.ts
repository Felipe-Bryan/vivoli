export function modal(title: string, content: string) {
  const modalLabel = document.getElementById('modalLabel')!;

  modalLabel.innerHTML = title;

  const modalContent = document.getElementById('modalContent')!;

  modalContent.innerHTML = content;
}

export function modal2(title: string, content: string) {
  const modalLabel = document.getElementById('modalLabel2')!;

  modalLabel.innerHTML = title;

  const modalContent = document.getElementById('modalContent2')!;

  modalContent.innerHTML = content;
}
