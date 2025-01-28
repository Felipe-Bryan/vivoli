import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

export async function getCep(cep: string) {
  const url = `${cep}/json/`;

  let result;

  await api.get(url).then((data) => {
    result = data.data;
  });

  return result;
}
