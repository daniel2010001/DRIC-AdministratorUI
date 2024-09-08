import { User } from "./User.model";
import { Auth } from "./auth.model";

/**
 * Enum para las claves de local storage
 */
export const LocalStorageKeys = {
  USER: "user",
  AUTH: "auth",
} as const;

/**
 * Tipo de LocalStorageKeys
 */
type LocalStorageKeysType = {
  [key in (typeof LocalStorageKeys)[keyof typeof LocalStorageKeys]]: any;
};

/**
 * Configuración de la store
 */
export interface AppStore extends LocalStorageKeysType {
  /** Estado del usuario en la store */
  user: User;
  /** Estado de la autenticación en la store */
  auth: Auth;
}
