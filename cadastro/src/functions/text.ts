import { Client } from '../types/Client';

export function text(client: Client) {
  return `
- - - - - - - - - - - - - - - - - - - - - - - -
*Dados Pessoais*
- - - - - - - - - - - - - - - - - - - - - - - -
*Nome:* ${client.nome}
*CPF:* ${client.cpf}
*RG:* ${client.rg}
*Nascimento:* ${client.nascimento}
*Endereço:* ${client.enderecoR}
*Numero:* ${client.numeroR}
*CEP:* ${client.cepR}
*Bairro:* ${client.bairroR}
*Cidade:* ${client.cidadeR}
*Estado:* ${client.estadoR}
*Telefone:* ${client.tel}
*Email:* ${client.email}
\n- - - - - - - - - - - - - - - - - - - - - - - -
*Dados Comerciais*
- - - - - - - - - - - - - - - - - - - - - - - -
*Tipo Estabelecimento:* ${client.tipo}
*Razão Social:* ${client.razao}
*Nome Fantasia:* ${client.fantasia}
*CNPJ:* ${client.cnpj}
*IE:* ${client.ie}
*Endereço:* ${client.enderecoC}
*Numero:* ${client.numeroC}
*CEP:* ${client.cepC}
*Bairro:* ${client.bairroC}
*Cidade:* ${client.cidadeC}
*Estado:* ${client.estadoC}
*Telefone:* ${client.telC}`;
}
