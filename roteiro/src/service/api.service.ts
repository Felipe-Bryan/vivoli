import axios from 'axios';

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

export async function apiGet(url: string) {
  let result: any;

  await api.get(`vivoli/${url}`).then((data) => {
    result = data.data;
  });

  return result;
}
