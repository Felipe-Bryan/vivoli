import { Client } from '../types/Client';

export function atendimento(client: Client) {
  if (client.abre === '-') {
    client.abre = '0';
  }

  if (client.fecha === '-') {
    client.fecha = '0';
  }

  if (Number(client.abre) < 10) {
    client.abre = `0${client.abre}`;
  }

  if (Number(client.fecha) < 10) {
    client.fecha = `0${client.fecha}`;
  }

  return `${client.abre}:00 - ${client.fecha}:00`;
}
