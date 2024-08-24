import { blockButton } from '../../components/blockButton';
import { inputGroup } from '../../components/inputGroup';
import { SelectOptionItem, selectForm } from '../../components/selectForm';
import { Client } from '../../types/Client';
import { getSessionStorageData, saveToSessionStorage } from '../../utils/handleStorage';
import { removeInvalidChar } from '../../utils/removeInvalidChar';

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

  const setores: SelectOptionItem[] = getSessionStorageData('setores');

  let line = `${blockButton(
    `viewFreezer`,
    `Ver Info Freezers`,
    'secondary',
    `data-bs-toggle="modal" data-bs-target="#modal2"`
  )}`;

  line += inputGroup({
    type: 'text',
    title: 'Nome',
    value: client.nome,
  });

  line += inputGroup({
    type: 'number',
    title: 'CPF',
    value: client.cpf,
  });

  line += inputGroup({
    type: 'number',
    title: 'RG',
    value: client.rg,
  });

  line += inputGroup({
    type: 'number',
    title: 'Nascimento',
    placeholder: 'DDMMAAAA',
    value: removeInvalidChar(client.nascimento),
  });

  line += inputGroup({
    type: 'text',
    title: 'Email',
    value: client.email,
  });

  line += inputGroup({
    type: 'number',
    title: 'Tel',
    value: client.tel,
  });

  line += inputGroup({
    type: 'number',
    title: 'CNPJ',
    value: client.cnpj,
  });

  line += inputGroup({
    type: 'number',
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

  line += `
  <div class="input-group m-0 mb-2 px-2">
    <span class="input-group-text" id="basic-addon1">Abre</span>
    <input 
      type="number" 
      id="abre-ipt" 
      class="form-control w-25" 
      placeholder="00" 
      value="${client.abre ? `${client.abre}` : `0`}" />
    <span class="input-group-text" id="basic-addon1">Fecha</span>
    <input 
      type="number" 
      id="fecha-ipt" 
      class="form-control w-25" placeholder="00" 
      value="${client.fecha ? `${client.fecha}` : `0`}" />
  </div>`;

  line += inputGroup({
    type: 'number',
    title: 'CEP',
    value: client.cep,
  });

  line += inputGroup({
    type: 'text',
    title: 'Endereço',
    value: client.endereco,
  });

  line += inputGroup({
    type: 'number',
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

  line += blockButton('updateLocation', 'Atualizar localização', 'secondary');

  return line;
}
