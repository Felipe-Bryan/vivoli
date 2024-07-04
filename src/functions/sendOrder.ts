import { Order } from '../types/Order';
import { getUrlValue } from '../utils/getUrlValue';
import { textGenerate } from '../utils/textGenerate';

export function sendOrder(order: Order[]) {
  const phone = getUrlValue('t');

  const msgContent = encodeURIComponent(textGenerate(order));

  const link = `https://wa.me/55${phone}?text=${msgContent}`;

  window.location.replace(link);
}
