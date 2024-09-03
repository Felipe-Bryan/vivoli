export function getTodayString() {
  const meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  const today = new Date().getDate();

  let todayString = '';

  if (today < 10) {
    todayString = '0' + today;
  }

  const month = meses[new Date().getMonth()];

  return `${todayString}/${month}`;
}
