export function setHourString(hour: number, minute: number) {
  let hourString = String(hour);

  if (hour < 10) {
    hourString = `0${hour}`;
  }

  let minString = String(minute);

  if (minute < 10) {
    minString = `0${minute}`;
  }

  return `${hourString}:${minString}`;
}
