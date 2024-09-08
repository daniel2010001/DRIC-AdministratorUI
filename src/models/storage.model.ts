import { User } from "./User.model";
import { Auth } from "./auth.model";

/**
 * Enum para las claves de local storage
 */
export const LocalStorageKeys = {
  /** Clave para el estado del usuario */
  USER: "user",
  /** Clave para el estado de la autenticación */
  AUTH: "auth",
} as const;

/**
 * Tipo de LocalStorageKeys
 */
type LocalStorageKeysType = {
  [key in (typeof LocalStorageKeys)[keyof typeof LocalStorageKeys]]: any;
};

/**
 * Configuración del almacenamiento de la app
 */
export interface AppStorage extends LocalStorageKeysType {
  /** Estado del usuario en la store */
  user: User;
  /** Estado de la autenticación en la store */
  auth: Auth;
}
