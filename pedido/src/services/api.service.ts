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
