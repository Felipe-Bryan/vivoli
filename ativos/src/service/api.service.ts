import axios from 'axios';
import { Client } from '../types/Client';

const api = axios.create({
  baseURL: 'https://comanda-api-1.onrender.com',
});

export async function apiPost(client: Client) {
  let result: any;

  await api.post('vivoli/client', client).then((data) => {
    result = data.data;
  });

  return result;
}

export async function apiGet(route: string) {
  let result: any;

  await api.get(`vivoli/${route}`).then((data) => {
    result = data.data;
  });

  return result;
}
