import axios from '../../node_modules/axios/index';
import { Client } from '../types/Client';

const api = axios.create({
  baseURL: 'https://comanda-api-1.onrender.com',
});

export async function apiPost(url: string, info: any) {
  let result: any;

  await api.post(`vivoli/${url}`, info).then((data) => {
    result = data.data;
  });

  return result;
}

export async function apiGet(route: string) {
  let result: any;

  await api.get(`vivoli/${route}`).then((data: any) => {
    result = data.data;
  });

  return result;
}
