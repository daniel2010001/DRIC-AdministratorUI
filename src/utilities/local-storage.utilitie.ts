import { AppStorage } from "@/models";

/**
 * Guarda un valor en LocalStorage
 * @param key Clave de LocalStorage
 * @param value Valor a guardar
 */
export const setLocalStore = <K extends keyof AppStorage>(
  key: K,
  value: AppStorage[K]
): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

/**
 * Obtiene el valor de un LocalStorageKey
 * @param key Clave de LocalStorage
 * @returns Valor de LocalStorageKey
 */
export const getLocalStore = <K extends keyof AppStorage>(
  key: K
): AppStorage[K] | undefined => {
  try {
    const value = localStorage.getItem(key);
    if (!value) return undefined;
    const parsedValue = JSON.parse(value) as AppStorage[K];
    return parsedValue;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Elimina un LocalStorageKey
 * @param key Clave de LocalStorage
 * @returns Valor eliminado
 */
export const removeLocalStore = <K extends keyof AppStorage>(
  key: K
): AppStorage[K] | undefined => {
  try {
    const item = getLocalStore(key);
    localStorage.removeItem(key as string);
    return item;
  } catch (error) {
    console.error(error);
  }
};

/** Elimina todo lo guardado en LocalStorage */
export const clearLocalStore = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(error);
  }
};
