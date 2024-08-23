export interface Client {
  id?: string;
  nome: string;
  cpf: string;
  rg: string;
  nascimento: string;
  email: string;
  tel: string;

  cnpj: string;
  ie: string;
  razao: string;
  fantasia: string;

  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;

  setor: string;
  ativo: boolean;
  bloqueado: boolean;

  atendido: boolean;
  diaSemana: string;
  frequencia: string;
  sequencia: number;

  latitude: number;
  longitude: number;
}
