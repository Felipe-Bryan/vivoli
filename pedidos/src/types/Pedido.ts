import { Order } from './Order';

export interface Pedido {
  id: string;
  cliente: string;
  data: string;
  valor: number;
  produtos: Order[];
}
