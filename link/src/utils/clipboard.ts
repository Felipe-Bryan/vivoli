export function clipboard(value: string) {
  navigator.clipboard.writeText(value);
}
