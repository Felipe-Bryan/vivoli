import { Product } from '../types/Product';
import { getStorageData } from '../utils/storageFunctions';

export const produtos: Product[] = getStorageData('produtos');
