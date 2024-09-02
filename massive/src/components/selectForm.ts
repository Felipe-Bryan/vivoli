export function selectForm(selectItem: SelectItem) {
  let result = `
<div class="m-0 mb-2 px-2">
    <select class="form-select m-0" id="${selectItem.id}">
        <option selected disabled value="0">${selectItem.title}</option>`;

  selectItem.options.forEach((option) => {
    result += selectOption(option);
  });

  result += `
  </select>
</div>`;

  return result;
}

function selectOption(selectOption: SelectOptionItem) {
  return `<option value="${selectOption.value}">${selectOption.text}</option>`;
}

export interface SelectOptionItem {
  value: string;
  text: string;
}

export interface SelectItem {
  id: string;
  title: string;
  options: SelectOptionItem[];
}
