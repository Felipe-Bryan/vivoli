import { Client } from '../../types/Client';

export function calcSequencia(client: Client): number {
  let result = client.sequencia;

  if (client.frequencia === 'S') {
    if (client.diaSemana === 'Segunda') {
      result;
    } else if (client.diaSemana === 'Terça') {
      result += 100;
    } else if (client.diaSemana === 'Quarta') {
      result += 200;
    } else if (client.diaSemana === 'Quinta') {
      result += 300;
    } else if (client.diaSemana === 'Sexta') {
      result += 400;
    } else if (client.diaSemana === 'Sábado') {
      result += 500;
    }
  }
  if (client.frequencia === 'A') {
    if (client.diaSemana === 'Segunda') {
      result += 1000;
    } else if (client.diaSemana === 'Terça') {
      result += 1200;
    } else if (client.diaSemana === 'Quarta') {
      result += 1400;
    } else if (client.diaSemana === 'Quinta') {
      result += 1600;
    } else if (client.diaSemana === 'Sexta') {
      result += 1800;
    } else if (client.diaSemana === 'Sábado') {
      result += 2000;
    }
  }
  if (client.frequencia === 'B') {
    if (client.diaSemana === 'Segunda') {
      result += 1100;
    } else if (client.diaSemana === 'Terça') {
      result += 1300;
    } else if (client.diaSemana === 'Quarta') {
      result += 1500;
    } else if (client.diaSemana === 'Quinta') {
      result += 1700;
    } else if (client.diaSemana === 'Sexta') {
      result += 1900;
    } else if (client.diaSemana === 'Sábado') {
      result += 2100;
    }
  }

  return result;
}

export function reverseCalcSequencia(client: Client) {
  let result = client.sequencia;

  if (client.frequencia === 'S') {
    if (client.diaSemana === 'Segunda') {
      result;
    } else if (client.diaSemana === 'Terça') {
      result -= 100;
    } else if (client.diaSemana === 'Quarta') {
      result -= 200;
    } else if (client.diaSemana === 'Quinta') {
      result -= 300;
    } else if (client.diaSemana === 'Sexta') {
      result -= 400;
    } else if (client.diaSemana === 'Sábado') {
      result -= 500;
    }
  }
  if (client.frequencia === 'A') {
    if (client.diaSemana === 'Segunda') {
      result -= 1000;
    } else if (client.diaSemana === 'Terça') {
      result -= 1200;
    } else if (client.diaSemana === 'Quarta') {
      result -= 1400;
    } else if (client.diaSemana === 'Quinta') {
      result -= 1600;
    } else if (client.diaSemana === 'Sexta') {
      result -= 1800;
    } else if (client.diaSemana === 'Sábado') {
      result -= 2000;
    }
  }
  if (client.frequencia === 'B') {
    if (client.diaSemana === 'Segunda') {
      result -= 1100;
    } else if (client.diaSemana === 'Terça') {
      result -= 1300;
    } else if (client.diaSemana === 'Quarta') {
      result -= 1500;
    } else if (client.diaSemana === 'Quinta') {
      result -= 1700;
    } else if (client.diaSemana === 'Sexta') {
      result -= 1900;
    } else if (client.diaSemana === 'Sábado') {
      result -= 2100;
    }
  }

  return result;
}
