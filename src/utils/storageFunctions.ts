export function saveToStorage(key: string, data: any) {
  return localStorage.setItem(key, JSON.stringify(data));
}

export function saveToSessionStorage(key: string, data: any) {
  return sessionStorage.setItem(key, JSON.stringify(data));
}

export function getStorageData(key: string) {
  const result = JSON.parse(localStorage.getItem(key) || '');

  return result;
}

export function getSessionStorageData(key: string) {
  const result = JSON.parse(sessionStorage.getItem(key) || '');

  return result;
}
