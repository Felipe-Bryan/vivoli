import { searchClient } from '../components/searchClient';
import { runSearch } from './runSearch';

export async function initSearch() {
  const spot = document.getElementById('content')!;

  spot.innerHTML = searchClient();

  const searchClientBtn = document.getElementById('searchClient')!;

  searchClientBtn.addEventListener('click', () => {
    const input = <HTMLInputElement>document.getElementById('search-ipt')!;

    runSearch(input.value);
  });
}
