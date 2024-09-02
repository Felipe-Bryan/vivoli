interface RowProps {
  title: string;
  value: string;
}

export function row(props: RowProps) {
  return `
<div class="row border-bottom p-1 px-2">
    <div class="col-3 fw-bold p-0">${props.title}:</div>
    <div class="col-9 p-0">${props.value}</div>
</div>`;
}
