import axios from 'axios';

const api = axios.create({
  baseURL: 'https://comanda-api-1.onrender.com',
});

export async function apiGet(url: string) {
  let result: any = '';

  await api.get(url).then((data) => {
    result = data.data;
  });

  return result;
}

export async function apiPost(url: string, data: any) {
  let result: any = '';

  await api.post(url, data).then((data) => {
    result = data.data;
  });

  return result;
}

export async function apiPut(url: string, data: any) {
  let result: any = '';

  await api.put(url, data).then((data) => {
    result = data.data;
  });

  return result;
}

export async function apiDelete(url: string) {
  let result: any = '';

  await api.delete(url).then((data) => {
    result = data.data;
  });

  return result;
}
