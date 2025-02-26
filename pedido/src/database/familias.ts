import { Family } from '../types/Family';
import { getStorageData } from '../utils/storageFunctions';

export const familias: Family[] = getStorageData('familias');
