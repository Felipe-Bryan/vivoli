import { blockButton } from '../../components/blockButton';
import { inputGroup } from '../../components/inputGroup';
import { SelectOptionItem, selectForm } from '../../components/selectForm';
import { Client } from '../../types/Client';

export function editInputs(client: Client) {
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

  let line = ``;

  line += inputGroup({
    type: 'text',
    title: 'Nome',
    value: client.nome,
  });

  line += inputGroup({
    type: 'text',
    title: 'CPF',
    value: client.cpf,
  });

  line += inputGroup({
    type: 'text',
    title: 'RG',
    value: client.rg,
  });

  line += inputGroup({
    type: 'text',
    title: 'Nascimento',
    placeholder: 'DD/MM/AAAA',
    value: client.nascimento,
  });

  line += inputGroup({
    type: 'text',
    title: 'Email',
    value: client.email,
  });

  line += inputGroup({
    type: 'text',
    title: 'Tel',
    value: client.tel,
  });

  line += inputGroup({
    type: 'text',
    title: 'CNPJ',
    value: client.cnpj,
  });

  line += inputGroup({
    type: 'text',
    title: 'IE',
    value: client.ie,
  });

  line += inputGroup({
    type: 'text',
    title: 'Razão',
    value: client.razao,
  });

  line += inputGroup({
    type: 'text',
    title: 'Fantasia',
    value: client.fantasia,
  });

  line += inputGroup({
    type: 'text',
    title: 'CEP',
    value: client.cep,
  });

  line += inputGroup({
    type: 'text',
    title: 'Endereço',
    value: client.endereco,
  });

  line += inputGroup({
    type: 'text',
    title: 'Número',
    value: client.numero,
  });

  line += inputGroup({
    type: 'text',
    title: 'Bairro',
    value: client.bairro,
  });

  line += inputGroup({
    type: 'text',
    title: 'Cidade',
    value: client.cidade,
  });

  line += inputGroup({
    type: 'text',
    title: 'Estado',
    value: client.estado,
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
    value: String(client.latitude),
  });

  line += inputGroup({
    type: 'number',
    title: 'Longitude',
    disabled: true,
    step: 0.0000001,
    value: String(client.longitude),
  });

  line += blockButton('saveClient', 'Salvar', 'success');

  return line;
}
