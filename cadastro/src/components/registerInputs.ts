import { blockButton } from './blockButton';
import { inputGroup } from './inputGroup';
import { selectForm, SelectOptionItem } from './selectForm';

export function registerInputs(): string {
  const tipos: SelectOptionItem[] = [
    { value: 'Mercado', text: 'Mercado' },
    { value: 'Mercearia', text: 'Mercearia' },
    { value: 'Padaria', text: 'Padaria' },
    { value: 'Empório', text: 'Empório' },
    { value: 'Açougue', text: 'Açougue' },
    { value: 'Restaurante', text: 'Restaurante' },
    { value: 'Lanchonete', text: 'Lanchonete' },
    { value: 'Farmácia', text: 'Farmácia' },
    { value: 'Conveniência', text: 'Conveniência' },
    { value: 'Açaiteria', text: 'Açaiteria' },
    { value: 'Sorveteria', text: 'Sorveteria' },
    { value: 'Bar', text: 'Bar' },
    { value: 'Outro', text: 'Outro' },
  ];

  let line = `
<div class="m-0 p-0 px-2 text-center w-100 fs-5 fw-bold">
    Dados Pessoais
</div>`;

  line += inputGroup({
    title: 'Nome',
    type: 'text',
    placeholder: 'Nome Completo',
  });

  line += inputGroup({
    title: 'CPF',
    type: 'number',
    placeholder: 'CPF',
  });

  line += inputGroup({
    title: 'RG',
    type: 'text',
    placeholder: 'RG',
  });

  line += inputGroup({
    title: 'Nascimento',
    type: 'text',
    placeholder: 'Data de nascimento',
  });

  line += inputGroup({
    title: 'CEP',
    type: 'number',
    placeholder: 'CEP Residencial',
  });

  line += inputGroup({
    title: 'Endereço',
    type: 'text',
    placeholder: 'Endereço Residencial',
  });

  line += inputGroup({
    title: 'Numero',
    type: 'text',
    placeholder: 'Numero Residencial',
  });

  line += inputGroup({
    title: 'Bairro',
    type: 'text',
    placeholder: 'Bairro',
  });

  line += inputGroup({
    title: 'Cidade',
    type: 'text',
    placeholder: 'Cidade',
  });

  line += inputGroup({
    title: 'Estado',
    type: 'text',
    placeholder: 'Estado',
  });

  line += inputGroup({
    title: 'Telefone',
    type: 'number',
    placeholder: 'Telefone',
  });

  line += inputGroup({
    title: 'Email',
    type: 'email',
    placeholder: 'Email',
  });

  line += `
<div class="m-0 p-0 px-2 text-center w-100 fs-5 fw-bold">
    Dados Comerciais
</div>`;

  line += selectForm({
    title: 'Tipo de Comércio',
    id: 'tipo-ipt',
    options: tipos,
  });

  line += inputGroup({
    title: 'Razão',
    type: 'text',
    placeholder: 'Razão Social',
  });

  line += inputGroup({
    title: 'Fantasia',
    type: 'text',
    placeholder: 'Nome Fantasia',
  });

  line += inputGroup({
    title: 'CNPJ',
    type: 'number',
    placeholder: 'CNPJ',
  });

  line += inputGroup({
    title: 'I.E.',
    type: 'number',
    placeholder: 'Inscrição Estadual',
  });

  line += inputGroup({
    title: 'CEP-C',
    type: 'number',
    placeholder: 'CEP Comercial',
  });

  line += inputGroup({
    title: 'Endereço-C',
    type: 'text',
    placeholder: 'Endereço Comercial',
  });

  line += inputGroup({
    title: 'Numero-C',
    type: 'text',
    placeholder: 'Numero',
  });

  line += inputGroup({
    title: 'Bairro-C',
    type: 'text',
    placeholder: 'Bairro',
  });

  line += inputGroup({
    title: 'Cidade-C',
    type: 'text',
    placeholder: 'Cidade',
  });

  line += inputGroup({
    title: 'Estado-C',
    type: 'text',
    placeholder: 'Estado',
  });

  line += inputGroup({
    title: 'Telefone-C',
    type: 'number',
    placeholder: 'Telefone Comercial',
  });

  line += blockButton({
    id: 'enviar',
    title: 'Enviar Dados',
    type: 'success',
  });

  return line;
}
