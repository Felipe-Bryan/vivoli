import { Client } from '../types/Client';
import { maskBirth, maskCep, maskCNPJ, maskCPF, maskIE, maskPhone } from '../utils/masks';

export function text(client: Client) {
  return `

*Dados Pessoais*
- - - - - - - - - - - - - - - - - - - - - - - -
*Nome:* ${client.nome}
*CPF:* ${maskCPF(client.cpf)}
*RG:* ${client.rg}
*Nascimento:* ${maskBirth(client.nascimento)}
*Endereço:* ${client.enderecoR}
*Numero:* ${client.numeroR}
*CEP:* ${maskCep(client.cepR)}
*Bairro:* ${client.bairroR}
*Cidade:* ${client.cidadeR}
*Estado:* ${client.estadoR}
*Telefone:* ${maskPhone(client.tel)}
*Email:* ${client.email}

*Dados Comerciais*
- - - - - - - - - - - - - - - - - - - - - - - -
*Tipo Estabelecimento:* ${client.tipo}
*Razão Social:* ${client.razao}
*Nome Fantasia:* ${client.fantasia}
*CNPJ:* ${client.cnpj.length >= 12 ? `${maskCNPJ(client.cnpj)}` : `${maskCPF(client.cnpj)}`}
*IE:* ${client.ie.length === 12 ? `${maskIE(client.ie)}` : `${client.ie}`}
*Endereço:* ${client.enderecoC}
*Numero:* ${client.numeroC}
*CEP:* ${maskCep(client.cepC)}
*Bairro:* ${client.bairroC}
*Cidade:* ${client.cidadeC}
*Estado:* ${client.estadoC}
*Telefone:* ${maskPhone(client.telC)}

*Informações Cadastrais*
- - - - - - - - - - - - - - - - - - - - - - - -
*Setor:* ${client.setor}
*Freezer:* ${client.freezer}`;
}
