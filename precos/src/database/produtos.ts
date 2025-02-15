import { Product } from '../types/Product';
import { getSessionStorageData } from '../utils/handleStorage';

export const produtos: Product[] = getSessionStorageData('produtos');
