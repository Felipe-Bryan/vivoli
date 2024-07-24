export function locationNotFound() {
  const spot = document.getElementById('result')!;

  spot.innerHTML = `<p class="h5 mx-2">Não Encontrado! Por favor verifique o número informado!</p>`;
}
