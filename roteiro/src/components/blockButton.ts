export function blockButton(
  id: string,
  title: string,
  color: 'danger' | 'success' | 'info' | 'dark' | 'warning' | 'primary' | 'secondary' | 'light' | ' dark'
) {
  return `
<div class="d-grid gap-2">
    <button class="btn btn-${color} mx-2 mb-2" type="button" id="${id}">${title}</button>
</div>`;
}
