import { dateString } from '../utils/handleDate';
import { getStorageData, saveToStorage } from '../utils/storageFunctions';

interface ReloadProps {
  date: string;
  counter: number;
}

export function reloadCount() {
  const reloads: ReloadProps = getStorageData('reloads');

  const today = dateString();
  // const today = '18/02/2025';

  let current: ReloadProps = {
    date: dateString(),
    // date: '18/02/2025',
    counter: 1,
  };

  if (!reloads) {
    saveToStorage('reloads', current);

    location.reload();
  } else {
    if (reloads.date != today) {
      saveToStorage('reloads', current);

      location.reload();
    }
  }
}
