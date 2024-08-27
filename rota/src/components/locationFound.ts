import { Client } from '../types/Client';
import { Vendedor } from '../types/Vendedor';
import { atendimento } from '../utils/atendimento';
import { getSessionStorageData } from '../utils/handleStorage';
import { mapLinker } from '../utils/mapLinker';
import { maskCep, maskPhone } from '../utils/masks';
import { blockButton } from './blockButton';
import { row } from './row';
import { rowBtn } from './rowIcon';

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

  line += row({
    title: 'Horário',
    value: atendimento(client),
  });

  line += blockButton({
    id: 'openMap',
    title: 'Mostrar no mapa',
    type: 'info',
  });

  line += row({
    title: 'Vendedor',
    value: vendedor.nome,
  });

  line += rowBtn({
    btnId: 'telVendedor',
    title: 'Tel',
    value: maskPhone(vendedor.tel),
    color: 'success',
    icon: '<i class="bi bi-whatsapp"></i>',
  });

  line += row({
    title: 'Cliente',
    value: client.nome,
  });

  line += rowBtn({
    btnId: 'telCliente',
    title: 'Tel',
    value: maskPhone(client.tel),
    color: 'success',
    icon: '<i class="bi bi-whatsapp"></i>',
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
