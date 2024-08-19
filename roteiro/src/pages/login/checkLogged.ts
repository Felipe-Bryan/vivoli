import { getStorageData } from '../../utils/handleStorage';

export function checkLogged(): boolean {
  const user = getStorageData('user');

  if (!user) {
    return false;
  } else {
    const today = `${new Date().getDate()}/${new Date().getMonth() + 1}`;

    if (user.date !== today) {
      return false;
    } else {
      return true;
    }
  }
}
