import { familias } from './database/familias';
import { produtos } from './database/produtos';
import { setFamilies } from './functions/setFamilies';
import { setProducts } from './functions/setProducts';

setFamilies(familias);
setProducts(produtos);
