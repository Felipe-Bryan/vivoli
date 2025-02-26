import { dateString } from '../utils/handleDate';
import { getStorageData, saveToStorage } from '../utils/storageFunctions';

interface ReloadProps {
  date1: string;
  date2: string;
}

const storageKey: string = 'reloads';

export function reloadCount() {
  const reloads: ReloadProps = getStorageData(storageKey);

  const today = dateString();

  let current: ReloadProps = {
    date1: today,
    date2: '-',
  };

  if (!reloads) {
    saveToStorage(storageKey, current);

    location.reload();
  } else {
    if (reloads.date1 != today) {
      saveToStorage(storageKey, current);

      location.reload();
    } else if (reloads.date2 != today) {
      reloads.date2 = today;

      saveToStorage(storageKey, reloads);

      location.reload();
    }
  }
}
