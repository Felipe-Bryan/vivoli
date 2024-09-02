export function setHourString(hour: number, minute: number) {
  let hourString = '';

  if (hour < 10) {
    hourString = `0${hour}`;
  }

  let minString = '';

  if (minute < 10) {
    minString = `0${minute}`;
  }

  return `${hourString}:${minString}`;
}
