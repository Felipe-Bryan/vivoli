interface RowIconProps {
  title: string;
  value: string;
  icon: string;
}

export function rowIcon(props: RowIconProps) {
  return `
<div class="row border-bottom p-1 px-2">
    <div class="col-3 fw-bold p-0">${props.title}:</div>
    <div class="col-7 p-0">${props.value}</div>
    <div class="col-2 p-0">${props.icon}</div>
</div>`;
}

interface RowBtnProps {
  btnId: string;
  title: string;
  value: string;
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'info' | 'light';
  icon: string;
}

export function rowBtn(props: RowBtnProps) {
  return `
<div class="row border-bottom p-1 px-2 d-flex align-items-center">
    <div class="col-3 fw-bold p-0">${props.title}:</div>
    <div class="col-7 p-0">${props.value}</div>
    <div class="col-2 p-0 d-flex justify-content-end">
      <button type="button" id="${props.btnId}" class="btn btn-${props.color} p-1 px-2">${props.icon}</button>    
    </div>
</div>`;
}
