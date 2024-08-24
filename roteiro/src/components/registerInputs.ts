import { getSessionStorageData } from '../utils/handleStorage';
import { blockButton } from './blockButton';
import { inputGroup } from './inputGroup';
import { selectForm, SelectOptionItem } from './selectForm';

export function register() {
  const diasSemana: SelectOptionItem[] = [
    { value: 'Segunda', text: 'Segunda' },
    { value: 'Terça', text: 'Terça' },
    { value: 'Quarta', text: 'Quarta' },
    { value: 'Quinta', text: 'Quinta' },
    { value: 'Sexta', text: 'Sexta' },
    { value: 'Sábado', text: 'Sábado' },
  ];

  const frequencia: SelectOptionItem[] = [
    { value: 'S', text: 'Semanal' },
    { value: 'A', text: 'Quinzenal 1' },
    { value: 'B', text: 'Quinzenal 2' },
  ];

  const setores: SelectOptionItem[] = getSessionStorageData('setores');

  let line = ``;

  line += inputGroup({
    type: 'text',
    title: 'Nome',
  });

  line += inputGroup({
    type: 'number',
    title: 'CPF',
  });

  line += inputGroup({
    type: 'number',
    title: 'RG',
  });

  line += inputGroup({
    type: 'number',
    title: 'Nascimento',
    placeholder: 'DDMMAAAA',
  });

  line += inputGroup({
    type: 'text',
    title: 'Email',
  });

  line += inputGroup({
    type: 'number',
    title: 'Tel',
  });

  line += inputGroup({
    type: 'number',
    title: 'CNPJ',
  });

  line += inputGroup({
    type: 'number',
    title: 'IE',
  });

  line += inputGroup({
    type: 'text',
    title: 'Razão',
  });

  line += inputGroup({
    type: 'text',
    title: 'Fantasia',
  });

  line += `
<div class="input-group m-0 mb-2 px-2">
  <span class="input-group-text" id="basic-addon1">Abre</span>
  <input type="number" id="abre-ipt" class="form-control w-25" placeholder="00" />
  <span class="input-group-text" id="basic-addon1">Fecha</span>
  <input type="number" id="fecha-ipt" class="form-control w-25" placeholder="00" />
</div>`;

  line += inputGroup({
    type: 'number',
    title: 'CEP',
  });

  line += inputGroup({
    type: 'text',
    title: 'Endereço',
  });

  line += inputGroup({
    type: 'number',
    title: 'Número',
  });

  line += inputGroup({
    type: 'text',
    title: 'Bairro',
  });

  line += inputGroup({
    type: 'text',
    title: 'Cidade',
  });

  line += inputGroup({
    type: 'text',
    title: 'Estado',
  });

  line += selectForm({
    id: 'setor-ipt',
    title: 'Setor',
    options: setores,
  });

  line += selectForm({
    id: 'diasemana-ipt',
    title: 'Dia da Semana',
    options: diasSemana,
  });

  line += selectForm({
    id: 'frequencia-ipt',
    title: 'Frequência',
    options: frequencia,
  });

  line += inputGroup({
    type: 'number',
    title: 'Latitude',
    disabled: true,
    step: 0.0000001,
  });

  line += inputGroup({
    type: 'number',
    title: 'Longitude',
    disabled: true,
    step: 0.0000001,
  });

  line += blockButton('saveClient', 'Salvar', 'success');

  return line;
}
