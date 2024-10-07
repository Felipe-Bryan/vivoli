import { getStorageData } from '../../utils/handleStorage';
import { todayString } from '../../utils/todayString';

export function checkLogged(): boolean {
  const user = getStorageData('user');

  if (!user) {
    return false;
  } else {
    const today = todayString();

    if (user.date !== today) {
      return false;
    } else {
      return true;
    }
  }
}
