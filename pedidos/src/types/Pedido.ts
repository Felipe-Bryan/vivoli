import { Produto } from './Produto';

export interface Pedido {
  id: string;
  cliente: string;
  data: string;
  valor: number;
  produtos: Produto[];
}
