/**
 * Estado de autenticación
 */
export interface Auth {
  /** Indica si el usuario está autenticado */
  isAuthed: boolean;
  /** Token de autenticación */
  token: string;
}
/**
 * Inicial AuthStore
 */

export const inicialAuth: Auth = {
  isAuthed: false,
  token: "",
};

export interface AuthEndpoint {
  auth: boolean;
  token: string;
}
