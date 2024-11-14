import { modal } from '../components/modal';

export function registerClient() {
  modal({
    label: 'Adicionar Cliente',
    body: 'Inputs',
    footer: 'Botões',
  });
}
