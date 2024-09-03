import { Client } from '../../types/Client';

export function calcSequencia(client: Client): number {
  let result = client.sequencia;

  if (client.frequencia === 'S') {
    if (client.diaSemana === 'Segunda') {
      return result;
    } else if (client.diaSemana === 'Terça') {
      return result + 100;
    } else if (client.diaSemana === 'Quarta') {
      return result + 200;
    } else if (client.diaSemana === 'Quinta') {
      return result + 300;
    } else if (client.diaSemana === 'Sexta') {
      return result + 400;
    } else if (client.diaSemana === 'Sábado') {
      return result + 500;
    }
  }
  if (client.frequencia === 'A') {
    if (client.diaSemana === 'Segunda') {
      return result + 1000;
    } else if (client.diaSemana === 'Terça') {
      return result + 1200;
    } else if (client.diaSemana === 'Quarta') {
      return result + 1400;
    } else if (client.diaSemana === 'Quinta') {
      return result + 1600;
    } else if (client.diaSemana === 'Sexta') {
      return result + 1800;
    } else if (client.diaSemana === 'Sábado') {
      return result + 2000;
    }
  }
  if (client.frequencia === 'B') {
    if (client.diaSemana === 'Segunda') {
      return result + 1100;
    } else if (client.diaSemana === 'Terça') {
      return result + 1300;
    } else if (client.diaSemana === 'Quarta') {
      return result + 1500;
    } else if (client.diaSemana === 'Quinta') {
      return result + 1700;
    } else if (client.diaSemana === 'Sexta') {
      return result + 1900;
    } else if (client.diaSemana === 'Sábado') {
      return result + 2100;
    }
  }

  return result;
}

export function reverseCalcSequencia(client: Client) {
  let result = client.sequencia;

  if (client.frequencia === 'S') {
    if (client.diaSemana === 'Segunda') {
      return result;
    } else if (client.diaSemana === 'Terça') {
      return result - 100;
    } else if (client.diaSemana === 'Quarta') {
      return result - 200;
    } else if (client.diaSemana === 'Quinta') {
      return result - 300;
    } else if (client.diaSemana === 'Sexta') {
      return result - 400;
    } else if (client.diaSemana === 'Sábado') {
      return result - 500;
    }
  }
  if (client.frequencia === 'A') {
    if (client.diaSemana === 'Segunda') {
      return result - 1000;
    } else if (client.diaSemana === 'Terça') {
      return result - 1200;
    } else if (client.diaSemana === 'Quarta') {
      return result - 1400;
    } else if (client.diaSemana === 'Quinta') {
      return result - 1600;
    } else if (client.diaSemana === 'Sexta') {
      return result - 1800;
    } else if (client.diaSemana === 'Sábado') {
      return result - 2000;
    }
  }
  if (client.frequencia === 'B') {
    if (client.diaSemana === 'Segunda') {
      return result - 1100;
    } else if (client.diaSemana === 'Terça') {
      return result - 1300;
    } else if (client.diaSemana === 'Quarta') {
      return result - 1500;
    } else if (client.diaSemana === 'Quinta') {
      return result - 1700;
    } else if (client.diaSemana === 'Sexta') {
      return result - 1900;
    } else if (client.diaSemana === 'Sábado') {
      return result - 2100;
    }
  }

  return result;
}
