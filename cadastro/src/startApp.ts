import { alertModal, modalToggle } from './components/modal';
import { registerInputs } from './components/registerInputs';
import { text } from './functions/text';
import { validateClient } from './functions/validateClient';
import { getCep } from './service/cep.service';
import { getUrlValue } from './utils/getUrlValue';
import { getStorageData, saveToStorage } from './utils/handleStorage';
import { removeInvalidChar } from './utils/removeInvalidChar';

export function startApp() {
  const root = document.getElementById('content')!;

  root.innerHTML = registerInputs();

  const allInputs = <NodeListOf<HTMLInputElement>>document.querySelectorAll('input');

  allInputs.forEach((input) => {
    input.addEventListener('change', () => {
      saveToStorage(input.id, input.value);
    });

    const saved = getStorageData(input.id);

    if (saved) {
      input.value = saved;
    }
  });

  const cepRIpt = <HTMLInputElement>document.getElementById('cep-ipt')!;
  const enderecoRIpt = <HTMLInputElement>document.getElementById('endereco-ipt')!;
  const bairroRIpt = <HTMLInputElement>document.getElementById('bairro-ipt')!;
  const cidadeRIpt = <HTMLInputElement>document.getElementById('cidade-ipt')!;
  const estadoRIpt = <HTMLInputElement>document.getElementById('estado-ipt')!;

  const cepCIpt = <HTMLInputElement>document.getElementById('cepc-ipt')!;
  const enderecoCIpt = <HTMLInputElement>document.getElementById('enderecoc-ipt')!;
  const bairroCIpt = <HTMLInputElement>document.getElementById('bairroc-ipt')!;
  const cidadeCIpt = <HTMLInputElement>document.getElementById('cidadec-ipt')!;
  const estadoCIpt = <HTMLInputElement>document.getElementById('estadoc-ipt')!;

  cepRIpt.addEventListener('change', async () => {
    const cep = removeInvalidChar(cepRIpt.value);

    await getCep(cep)
      .then((data: any) => {
        console.log(data);

        if (data) {
          enderecoRIpt.value = data.logradouro;
          bairroRIpt.value = data.bairro;
          cidadeRIpt.value = data.localidade;
          estadoRIpt.value = data.uf;

          saveToStorage(enderecoRIpt.id, enderecoRIpt.value);
          saveToStorage(bairroRIpt.id, bairroRIpt.value);
          saveToStorage(cidadeRIpt.id, cidadeRIpt.value);
          saveToStorage(estadoRIpt.id, estadoRIpt.value);
        }
      })
      .catch(() => {
        console.log('CEP não encontrado');
      });
  });

  cepCIpt.addEventListener('change', async () => {
    const cep = removeInvalidChar(cepCIpt.value);

    await getCep(cep)
      .then((data: any) => {
        if (data) {
          enderecoCIpt.value = data.logradouro;
          bairroCIpt.value = data.bairro;
          cidadeCIpt.value = data.localidade;
          estadoCIpt.value = data.uf;

          saveToStorage(enderecoCIpt.id, enderecoCIpt.value);
          saveToStorage(bairroCIpt.id, bairroCIpt.value);
          saveToStorage(cidadeCIpt.id, cidadeCIpt.value);
          saveToStorage(estadoCIpt.id, estadoCIpt.value);
        }
      })
      .catch(() => {
        console.log('CEP não encontrado');
      });
  });

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

      allInputs.forEach((input) => {
        localStorage.removeItem(input.id);
      });

      window.location.replace(link);
    }
  });
}
