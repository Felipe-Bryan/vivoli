import { blockButton } from './blockButton';
import { inputGroup } from './inputGroup';
import { selectForm, SelectOptionItem } from './selectForm';

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

const setores: SelectOptionItem[] = [
  { value: '38', text: 'Setor 38' },
  { value: '47', text: 'Setor 47' },
  { value: '51', text: 'Setor 51' },
  { value: '55', text: 'Setor 55' },
  { value: '60', text: 'Setor 60' },
];

export function register() {
  let line = ``;

  line += inputGroup({
    type: 'text',
    title: 'Nome',
  });

  line += inputGroup({
    type: 'text',
    title: 'CPF',
  });

  line += inputGroup({
    type: 'text',
    title: 'RG',
  });

  line += inputGroup({
    type: 'text',
    title: 'Nascimento',
  });

  line += inputGroup({
    type: 'text',
    title: 'Email',
  });

  line += inputGroup({
    type: 'text',
    title: 'Tel',
  });

  line += inputGroup({
    type: 'text',
    title: 'CNPJ',
  });

  line += inputGroup({
    type: 'text',
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

  line += inputGroup({
    type: 'text',
    title: 'CEP',
  });

  line += inputGroup({
    type: 'text',
    title: 'Endereço',
  });

  line += inputGroup({
    type: 'text',
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
