import { familias } from './database/familias';
import { produtos } from './database/produtos';
import { setFamilies } from './functions/setFamilies';
import { setProducts } from './functions/setProducts';
import { getUrlValue } from './utils/getUrlValue';

setFamilies(familias);
setProducts(produtos);

console.log(getUrlValue('t'));
