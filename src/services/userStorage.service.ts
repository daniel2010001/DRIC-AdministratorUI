import { User } from "@/models";

/**
 * Almacenar el usuario en localStorage
 * @param user Usuario a almacenar
 */
export const setUserStorage = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

/**
 * Obtener el usuario almacenado en localStorage
 * @returns Usuario almacenado en localStorage
 */
export const getUserStorage = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

/**
 * Eliminar el usuario almacenado en localStorage
 */
export const removeUserStorage = () => {
  localStorage.removeItem("user");
};
