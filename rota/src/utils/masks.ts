export function maskPhone(telefone: string): string {
  const numero = telefone.replace(/\D/g, '');

  if (numero.length == 10) {
    return `(${numero.slice(0, 2)}) ${numero.slice(2, 6)}-${numero.slice(6)}`;
  } else if (numero.length == 11) {
    return `(${numero.slice(0, 2)}) ${numero.slice(2, 3)} ${numero.slice(3, 7)}-${numero.slice(7)}`;
  } else {
    return String(numero);
  }
}

export function maskCep(number: string): string {
  const numero = number.replace(/\D/g, '');

  return `${numero.slice(0, 2)} ${numero.slice(2, 5)}-${numero.slice(5)}`;
}