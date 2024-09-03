export function removeInvalidChar(value: string) {
  let string = value
    .toLowerCase()
    .replace('á', 'a')
    .replace('â', 'a')
    .replace('à', 'a')
    .replace('ã', 'a')
    .replace('é', 'e')
    .replace('ê', 'e')
    .replace('í', 'i')
    .replace('ó', 'o')
    .replace('ô', 'o')
    .replace('ú', 'u')
    .replace('ü', 'u')
    .replace('ç', 'c')
    .replace('/', '')
    .replace('-', '')
    .replace('.', '')
    .replace('.', '');

  return string;
}

export function removeInvalidCharPhone(value: string) {
  let string = value
    .toLowerCase()
    .replace('(', '')
    .replace(')', '')
    .replace(' ', '')
    .replace(' ', '')
    .replace(' ', '')
    .replace('-', '')
    .replace('-', '')
    .replace('-', '');

  return string;
}