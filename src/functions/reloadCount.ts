import { dateString } from '../utils/handleDate';
import { getStorageData, saveToStorage } from '../utils/storageFunctions';

interface ReloadProps {
  date1: string;
  date2: string;
}

export function reloadCount() {
  const reloads: ReloadProps = getStorageData('reloads');

  const today = dateString();
  // const today = '18/02/2025';

  let current: ReloadProps = {
    date1: today,
    date2: '-',
  };

  if (!reloads) {
    saveToStorage('reloads', current);

    location.reload();
  } else {
    if (reloads.date1 != today) {
      saveToStorage('reloads', current);

      location.reload();
    } else if (reloads.date2 != today) {
      reloads.date2 = today;

      saveToStorage('reloads', reloads);

      location.reload();
    }
    // else if (reloads.date3 != today) {
    //   reloads.date3 = today;

    //   saveToStorage('reloads', reloads);

    //   location.reload();
    // }
  }
}
