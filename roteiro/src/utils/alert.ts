interface AlertProps {
  msg: string;
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'warning' | 'light' | 'dark';
  time?: number;
}

export function triggerAlert(props: AlertProps) {
  const alertPlaceholder = document.getElementById('alertPlaceholder')!;

  const alert = `
    <div class="alert alert-${props.type} alert-dismissible fixed-bottom mx-2 d-none d-sm-block" role="alert">
        <div>$props.{msg}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

  alertPlaceholder.innerHTML = alert;

  if (props.time) {
    setTimeout(() => {
      closealert();
    }, props.time);
  }
}

function closealert() {
  const alertPlaceholder = document.getElementById('alertPlaceholder')!;

  alertPlaceholder.classList.add('fade');

  setTimeout(() => {
    alertPlaceholder.innerHTML = '';
  }, 500);

  setTimeout(() => {
    alertPlaceholder.classList.remove('fade');
  }, 1100);
}
