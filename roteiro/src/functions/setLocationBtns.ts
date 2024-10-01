import { Client } from '../types/Client';
import { getSessionStorageData } from '../utils/handleStorage';
import { mapLinker } from '../utils/mapLinker';

export function setLocationBtns() {
  const locationBtns = <NodeListOf<HTMLElement>>document.querySelectorAll('.location');

  locationBtns.forEach((btn) => {
    const clientId = btn.id.replace('location', '');

    btn.addEventListener('click', () => {
      const clients: Client[] = getSessionStorageData('clients');
      const client = clients.find((item) => item.id === clientId)!;

      window.open(mapLinker(client), '_blank');
    });
  });
}
