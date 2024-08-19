import { loginForm } from '../../components/loginForm';
import { apiPost } from '../../service/api.service';
import { saveToStorage } from '../../utils/handleStorage';
import { startApp } from '../app/startApp';
import { checkLogged } from './checkLogged';

export function startLogin() {
  const logged: boolean = checkLogged();

  if (logged === true) {
    startApp();
  } else {
    const root = document.getElementById('root')!;

    root.innerHTML = loginForm();

    const setorIpt = <HTMLInputElement>document.getElementById('setor-ipt')!;
    const senhaIpt = <HTMLInputElement>document.getElementById('senha-ipt')!;

    const loginBtn = <HTMLButtonElement>document.getElementById('loginBtn')!;
    const passIcon = document.getElementById('passIcon')!;

    passIcon.addEventListener('click', () => {
      if (senhaIpt.type === 'password') {
        senhaIpt.type = 'text';
        passIcon.innerHTML = `<i class="bi bi-eye"></i>`;
      } else {
        senhaIpt.type = 'password';
        passIcon.innerHTML = `<i class="bi bi-eye-slash"></i>`;
      }
    });

    loginBtn.addEventListener('click', async () => {
      const loginInfo = {
        login: setorIpt.value,
        password: senhaIpt.value,
      };

      await apiPost('auth', loginInfo)
        .then((data) => {
          const logged = { ...data.data, date: `${new Date().getDate()}/${new Date().getMonth() + 1}` };

          console.log(logged);

          saveToStorage('user', logged);

          startApp();
        })
        .catch(() => {
          alert('Falha na autenticação, verifique os dados!');
        });
    });
  }
}
