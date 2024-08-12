export function checkEvenWeek() {
  const dt = new Date();

  dt.setHours(0, 0, 0, 0);

  const dayNum = Math.floor((Number(dt) - Number(new Date(dt.getFullYear(), 0, 1))) / 86400000);

  const dayOfWeek = dt.getDay();

  const weekNum = Math.ceil((dayNum + 4 - dayOfWeek) / 7);

  if (weekNum % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
