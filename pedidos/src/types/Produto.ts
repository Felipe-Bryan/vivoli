export interface Produto {
  id: string;
  nome: string;
  custo: number;
  caixaQt: number;
  sugestao: number;
  caixa: boolean;
  familia: string;
  qt?: number;
}
