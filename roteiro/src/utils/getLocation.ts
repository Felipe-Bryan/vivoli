import { saveToSessionStorage } from './handleStorage';

export function getLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      saveToSessionStorage('latitude', position.coords.latitude);
      saveToSessionStorage('longitude', position.coords.longitude);
    });
  } else {
    console.log('unavailable');
  }
}
