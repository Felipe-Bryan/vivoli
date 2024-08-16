interface RowIconProps {
  title: string;
  value: string;
  icon: string;
}

export function rowIcon(props: RowIconProps) {
  return `
<div class="row border-bottom p-1 px-2">
    <div class="col-3 fw-bold p-0">${props.title}:</div>
    <div class="col-8 p-0">${props.value}</div>
    <div class="col-1 p-0">${props.icon}</i></div>
</div>`;
}
