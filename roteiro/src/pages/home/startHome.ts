import { setLocationBtns } from '../../functions/setLocationBtns';
import { defineRoot } from '../../utils/defineRoot';
import { main } from './components/main';

export function startHome() {
  const root = defineRoot();

  root.innerHTML = main();

  setLocationBtns();
}
