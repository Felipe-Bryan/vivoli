import { url } from '../pages/home/startHome';

export function setSpotValue(spots: NodeListOf<Element>, value: string) {
  spots.forEach((spot) => {
    const link = `${url}/${spot.id}/?t=${value}`;

    spot.innerHTML = link;

    spot.setAttribute('href', link);
  });
}
