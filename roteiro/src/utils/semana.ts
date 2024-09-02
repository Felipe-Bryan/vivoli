export const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export function setDiaSemana(): string {
  return semana[new Date().getDay()];
}
