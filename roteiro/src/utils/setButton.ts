export function setButton(id: string, execute: () => any) {
  const button = <HTMLButtonElement>document.getElementById(id);

  if (button) {
    button.addEventListener('click', () => {
      execute();
    });
  }
}

export function setEventListener(
  id: string,
  event: 'click' | 'change' | 'keyup' | 'blur' | 'focus',
  execute: () => any
) {
  const element = <HTMLElement>document.getElementById(id);

  if (element) {
    element.addEventListener(event, () => {
      execute();
    });
  }
}
