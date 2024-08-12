export function blockButton(
  id: string,
  title: string,
  type: 'danger' | 'success' | 'info' | 'dark' | 'warning' | 'primary' | 'secondary' | 'light' | ' dark'
) {
  return `
<div class="d-grid gap-2">
    <button class="btn btn-${type} mx-2 mb-2" type="button" id="${id}">${title}</button>
</div>`;
}
