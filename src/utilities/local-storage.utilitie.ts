import { AppStore } from "@/models";

/**
 * Guarda un valor en LocalStorage
 * @param key Clave de LocalStorage
 * @param value Valor a guardar
 */
export const setLocalStore = <K extends keyof AppStore>(
  key: K,
  value: AppStore[K]
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
export const getLocalStore = <K extends keyof AppStore>(
  key: K
): AppStore[K] | undefined => {
  try {
    const value = localStorage.getItem(key);
    if (!value) return undefined;
    const parsedValue = JSON.parse(value) as AppStore[K];
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
export const removeLocalStore = <K extends keyof AppStore>(
  key: K
): AppStore[K] | undefined => {
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
