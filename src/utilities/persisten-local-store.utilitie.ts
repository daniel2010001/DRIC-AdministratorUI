export enum LocalStorageKeys {
  USER = "user",
  AUTH = "auth",
}

export const setLocalStore = <T>(key: string, value: T) => {
  try {
    localStorage.setItem(key, JSON.stringify({ ...value }));
  } catch (error) {
    console.error(error);
  }
};

export const getLocalStore = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(error);
  }
};

export const removeLocalStore = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const clearLocalStore = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(error);
  }
};
