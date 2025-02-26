// import { alertModal } from '../components/alertModal';
// import { clipboard } from '../utils/clipboard';

export function setCopyBtn(btns: NodeListOf<HTMLButtonElement>) {
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const spot = document.getElementById(btn.id.replace('copy', ''))!;

      console.log(spot.innerHTML);

      //   clipboard(spot.innerHTML);

      //   alertModal({
      //     title: 'Sucesso',
      //     content: 'Link copiado para a área de transferência!',
      //   });
    });
  });
}
