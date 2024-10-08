import { familyItem } from '../components/familyItem';
import { Family } from '../types/Family';

export function setFamilies(families: Family[]) {
  const spot = document.getElementById('content');

  if (spot) {
    spot.innerHTML = '';

    families.forEach((item) => {
      spot.innerHTML += familyItem(item);
    });
  }
}
