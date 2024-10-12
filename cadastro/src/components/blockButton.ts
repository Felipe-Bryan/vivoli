interface BlockButtonProps {
  id: string;
  title: string;
  type: 'danger' | 'success' | 'info' | 'dark' | 'warning' | 'primary' | 'secondary' | 'light';
}

export function blockButton(props: BlockButtonProps) {
  return `
<div class="d-grid gap-2 m-1">
    <button class="btn btn-${props.type} mb-2" type="button" id="${props.id}">${props.title}</button>
</div>`;
}
