import { Client } from '../types/Client';

export function mapLinker(client: Client) {
  return `https://www.google.com/maps?q=${client.latitude},${client.longitude}`;
}
