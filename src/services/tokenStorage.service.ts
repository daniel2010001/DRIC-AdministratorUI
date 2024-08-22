/**
 * Almacenar el token en localStorage
 * @param token Token a almacenar
 */
export const setTokenStorage = (token: string) => {
  localStorage.setItem("token", token);
};

/**
 * Obtener el token almacenado en localStorage
 * @returns Token almacenado en localStorage
 */
export const getTokenStorage = () => {
  return localStorage.getItem("token");
};

/**
 * Eliminar el token almacenado en localStorage
 */
export const removeTokenStorage = () => {
  localStorage.removeItem("token");
};
