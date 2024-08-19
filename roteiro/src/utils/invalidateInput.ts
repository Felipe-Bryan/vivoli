export function invalidateInput(input: HTMLInputElement | HTMLSelectElement) {
  input.classList.add('is-invalid');

  input.focus();

  input.addEventListener('change', () => {
    input.classList.remove('is-invalid');
  });
}
