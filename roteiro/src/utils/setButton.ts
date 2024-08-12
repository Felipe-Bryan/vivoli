export function setButton(id: string, execute: () => any) {
  const button = <HTMLButtonElement>document.getElementById(id);

  if (button) {
    button.addEventListener('click', () => {
      execute();
    });
  }
}
