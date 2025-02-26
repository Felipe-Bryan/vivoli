import { getUrlValue } from './utils/getUrlValue';

const tel = getUrlValue('t');

location.replace(`https://vivoli.vercel.app/pedido/?t=${tel}`);
