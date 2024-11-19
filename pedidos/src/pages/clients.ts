// import { clientLine } from '../components/clientLine';
// import { clientsHeader } from '../components/clientsHeader';
// import { registerClient } from '../functions/registerClient';
// import { Client } from '../types/Client';
// import { getStorageData, saveToStorage } from '../utils/handleStorage';
// import { root } from '../utils/root';
// import { startHome } from './home';

// export function startClients() {
//   root.innerHTML = clientsHeader();

//   const clients: Client[] = getStorageData('clients') || [];

//   const pageContent = document.getElementById('pageContent')!;

//   clients.forEach((client) => {
//     pageContent.innerHTML += clientLine(client);
//     setDelete(clients);
//   });

//   const homeBtn = document.getElementById('home')!;

//   homeBtn.addEventListener('click', () => {
//     startHome();
//   });

//   const newClientBtn = document.getElementById('newClient')!;

//   newClientBtn.addEventListener('click', () => {
//     registerClient();
//   });
// }

// function setDelete(clients: Client[]) {
//   const deleteBtns = document.querySelectorAll('.del');

//   deleteBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       const confirmation = confirm('Deseja deletar o cliente?\nEsta ação não pode ser desfeita.');
//       if (confirmation) {
//         const client = clients.find((item) => item.id === btn.id.replace('del-', ''))!;

//         const clientIndex = clients.indexOf(client);

//         clients.splice(clientIndex, 1);

//         saveToStorage('clients', clients);

//         startClients();
//       } else {
//         return;
//       }
//     });
//   });
// }
