export function todayString(): string {
  return `${new Date().getDate()}/${new Date().getMonth() + 1}`;
}
