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

export function maskBirth(number: string): string {
  const numero = number.replace(/\D/g, '');

  return `${numero.slice(0, 2)}/${numero.slice(2, 4)}/${numero.slice(4)}`;
}

export function maskCPF(number: string) {
  const numero = number.replace(/\D/g, '');

  if (numero.length === 11) {
    return `${numero.slice(0, 3)}.${numero.slice(3, 6)}.${numero.slice(6, 9)}-${numero.slice(9)}`;
  } else if (numero.length === 10) {
    return `0${numero.slice(0, 2)}.${numero.slice(2, 5)}.${numero.slice(5, 8)}-${numero.slice(8)}`;
  } else if (numero.length === 9) {
    return `00${numero.slice(0, 1)}.${numero.slice(1, 4)}.${numero.slice(4, 7)}-${numero.slice(7)}`;
  } else if (numero.length === 8) {
    return `000${numero.slice(0, 0)}.${numero.slice(0, 3)}.${numero.slice(3, 6)}-${numero.slice(6)}`;
  } else {
    return String(numero);
  }
}

export function maskCNPJ(number: string) {
  const numero = number.replace(/\D/g, '');

  if (number.length === 14) {
    return `${numero.slice(0, 2)}.${numero.slice(2, 5)}.${numero.slice(5, 8)}/${numero.slice(8, 12)}-${numero.slice(
      12
    )}`;
  } else if (number.length === 13) {
    return `0${numero.slice(0, 1)}.${numero.slice(1, 4)}.${numero.slice(4, 7)}/${numero.slice(7, 11)}-${numero.slice(
      11
    )}`;
  } else if (number.length === 12) {
    return `00${numero.slice(0, 0)}.${numero.slice(0, 3)}.${numero.slice(3, 6)}/${numero.slice(6, 10)}-${numero.slice(
      10
    )}`;
  } else {
    return String(numero);
  }
}

export function maskIE(number: string) {
  const numero = number.replace(/\D/g, '');

  return `${numero.slice(0, 3)}.${numero.slice(3, 6)}.${numero.slice(6, 9)}.${numero.slice(9)}`;
}
