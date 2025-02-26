import { url } from '../pages/home/startHome';

export function setSpotValue(spots: NodeListOf<Element>, value: string) {
  spots.forEach((spot) => {
    const toTel = spot.classList.contains('toTel');

    let link = '';

    if (toTel) {
      link = `${url}/${spot.id}/?t=${value}`;
    } else {
      link = `${url}/${spot.id}/`;
    }

    spot.innerHTML = link;

    spot.setAttribute('href', link);
  });
}
