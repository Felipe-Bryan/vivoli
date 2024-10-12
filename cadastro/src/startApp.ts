import { alertModal, modalToggle } from './components/modal';
import { registerInputs } from './components/registerInputs';
import { text } from './functions/text';
import { validateClient } from './functions/validateClient';
import { getUrlValue } from './utils/getUrlValue';

export function startApp() {
  const root = document.getElementById('content')!;

  root.innerHTML = registerInputs();

  const sendBtn = document.getElementById('enviar')!;

  sendBtn.addEventListener('click', () => {
    const newClient = validateClient();

    if (newClient !== undefined) {
      const dataText = text(newClient);

      const msgContent = encodeURIComponent(dataText);

      const link = `https://wa.me/55${getUrlValue('t')}?text=${msgContent}`;

      alertModal({
        label: 'Enviando',
        body: 'Você será redirecionado ao WhatsApp',
      });

      modalToggle();

      window.location.replace(link);
    }
  });
}
