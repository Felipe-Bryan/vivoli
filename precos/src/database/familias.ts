import { Family } from '../types/Family';
import { getSessionStorageData } from '../utils/handleStorage';

export const familias: Family[] = getSessionStorageData('familias');
