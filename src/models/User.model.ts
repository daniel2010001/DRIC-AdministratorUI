/**
 * Estado de autenticación
 */
export interface AuthStore {
  auth: boolean;
  token: string;
}

/**
 * Inicial AuthStore
 */
export const inicialAuth: AuthStore = {
  auth: false,
  token: "",
};

/**
 * Tipo de usuario
 */
export const UserType = {
  ADMINISTRADOR: "ADMINISTRADOR",
  BECARIO: "BECARIO",
} as const;

/**
 * Tipo de usuario
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * Usuario
 */
export interface User {
  id: number;
  username: string;
  email: string;
  type: UserType;
}

/**
 * Inicial User
 */
export const inicialUser: User = {
  id: 0,
  username: "",
  email: "",
  type: "BECARIO",
};

/**
 * Usuario de la API
 */
export interface UserEndpoint {
  id_usuario: number;
  nombre_usuario: string;
  email_usuario: string;
  tipo_usuario: UserType;
}

/**
 * Inicial UserEndpoint
 */
export const inicialEndpointUser: UserEndpoint = {
  id_usuario: 0,
  nombre_usuario: "",
  email_usuario: "",
  tipo_usuario: "BECARIO",
};
