import { blockButton } from '../../../components/blockButton';
import { inputGroup } from '../../../components/inputGroup';
import { SelectOptionItem, selectForm } from '../../../components/selectForm';
import { Client } from '../../../types/Client';
import { getSessionStorageData } from '../../../utils/handleStorage';

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

  let line = '';

  // line += blockButton(
  //   `viewFreezer`,
  //   `Ver Info Freezers`,
  //   'secondary',
  //   `data-bs-toggle="modal" data-bs-target="#modal2"`
  // );

  line += inputGroup({
    type: 'text',
    title: 'Nome',
    value: client.nome,
  });

  line += inputGroup({
    type: 'number',
    title: 'CPF',
    value: Number(client.cpf),
  });

  line += inputGroup({
    type: 'number',
    title: 'RG',
    value: Number(client.rg),
  });

  line += inputGroup({
    type: 'text',
    title: 'Nascimento',
    placeholder: 'DDMMAAAA',
    value: client.nascimento,
  });

  line += inputGroup({
    type: 'text',
    title: 'Email',
    value: client.email,
  });

  line += inputGroup({
    type: 'number',
    title: 'Tel',
    value: Number(client.tel),
  });

  line += inputGroup({
    type: 'number',
    title: 'CNPJ',
    value: Number(client.cnpj),
  });

  line += inputGroup({
    type: 'number',
    title: 'IE',
    value: Number(client.ie),
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
  <span class="input-group-text w-25" id="basic-addon1">Atendimento</span>
  <input
    type="number"
    id="abreH"
    value="${Number(client.abre[0])}${Number(client.abre[1])}"
    class="form-control"
    placeholder="00"
    aria-label="00"
    aria-describedby="basic-addon1"
    min="0"
    max="23"
    step="1" />
  <span class="input-group-text" id="basic-addon1">:</span>
  <input
    type="number"
    id="abreM"
    value="${Number(client.abre[3])}${Number(client.abre[4])}"
    class="form-control"
    placeholder="00"
    aria-label="00"
    aria-describedby="basic-addon1"
    min="0"
    max="59"
    step="1" />
  <span class="input-group-text" id="basic-addon1">à</span>
  <input
    type="number"
    id="fechaH"
    value="${Number(client.fecha[0])}${Number(client.fecha[1])}"
    class="form-control"
    placeholder="00"
    aria-label="00"
    aria-describedby="basic-addon1"
    min="0"
    max="23"
    step="1" />
  <span class="input-group-text" id="basic-addon1">:</span>
  <input
    type="number"
    id="fechaM"
    value="${Number(client.fecha[3])}${Number(client.fecha[4])}"
    class="form-control"
    placeholder="00"
    aria-label="00"
    aria-describedby="basic-addon1"
    min="0"
    max="59"
    step="1" />
</div>`;

  line += inputGroup({
    type: 'number',
    title: 'CEP',
    value: Number(client.cep),
  });

  line += inputGroup({
    type: 'text',
    title: 'Endereço',
    value: client.endereco,
  });

  line += inputGroup({
    type: 'number',
    title: 'Número',
    value: Number(client.numero),
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
    value: Number(client.latitude),
  });

  line += inputGroup({
    type: 'number',
    title: 'Longitude',
    disabled: true,
    step: 0.0000001,
    value: Number(client.longitude),
  });

  line += blockButton('updateLocation', 'Atualizar localização', 'secondary');

  return line;
}
