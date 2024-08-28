import { Client } from '../types/Client';

export function atendimento(client: Client) {
  if (client.abre === '-') {
    client.abre = '00:00';
  }

  if (client.fecha === '-') {
    client.fecha = '00:00';
  }

  return `${client.abre} - ${client.fecha}`;
}
