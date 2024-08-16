import { Client } from '../types/Client';
import { Vendedor } from '../types/Vendedor';
import { getSessionStorageData } from '../utils/handleStorage';
import { mapLinker } from '../utils/mapLinker';
import { maskCep, maskPhone } from '../utils/masks';
import { blockButton } from './blockButton';
import { row } from './row';
import { rowIcon } from './rowIcon';

export function locationFound(client: Client) {
  const vendedores: Vendedor[] = getSessionStorageData('vendedores');
  const vendedor: Vendedor | undefined = vendedores.find((item) => item.setor === client.setor)!;

  const spot = document.getElementById('result')!;

  spot.innerHTML = '';

  let line = row({
    title: 'Razão',
    value: client.razao,
  });

  line += row({
    title: 'Endereço',
    value: client.endereco,
  });

  line += row({
    title: 'Número',
    value: client.numero,
  });

  line += row({
    title: 'Cidade',
    value: client.cidade,
  });

  line += row({
    title: 'Bairro',
    value: client.bairro,
  });

  line += row({
    title: 'CEP',
    value: maskCep(client.cep),
  });

  line += row({
    title: 'Estado',
    value: client.estado,
  });

  line += blockButton({
    id: 'openMap',
    title: 'Abrir Mapa',
    type: 'info',
  });

  line += row({
    title: 'Vendedor',
    value: vendedor.nome,
  });

  line += rowIcon({
    title: 'Tel',
    value: maskPhone(vendedor.tel),
    icon: '<i class="bi bi-whatsapp text-success" id="telVendedor"></i>',
  });

  line += row({
    title: 'Cliente',
    value: client.nome,
  });

  line += rowIcon({
    title: 'Tel',
    value: maskPhone(client.tel),
    icon: '<i class="bi bi-whatsapp text-success" id="telCliente"></i>',
  });

  spot.innerHTML = line;

  const openMapBtn = document.getElementById('openMap')!;

  openMapBtn.addEventListener('click', () => {
    window.open(mapLinker(client), '_blank');
  });

  const telVendedorBtn = document.getElementById('telVendedor')!;

  telVendedorBtn.addEventListener('click', () => {
    window.open(`https://wa.me/55${vendedor.tel}`, '_blank');
  });

  const telClienteBtn = document.getElementById('telCliente')!;

  telClienteBtn.addEventListener('click', () => {
    window.open(`https://wa.me/55${client.tel}`, '_blank');
  });
}
