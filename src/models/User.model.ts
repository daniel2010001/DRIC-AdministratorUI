export interface AuthState {
  auth: boolean;
  token: string;
}

export const inicialAuth: AuthState = {
  auth: false,
  token: "",
};

export interface User {
  id: number;
  username: string;
  email: string;
  type: string;
}

export interface UserEndpoint {
  id_usuario: number;
  nombre_usuario: string;
  email_usuario: string;
  tipo_usuario: string;
}

export interface UserCreate {
  name: string;
  password: string;
  email: string;
}

export const inicialUser: User = {
  id: 0,
  username: "",
  email: "",
  type: "",
};

export const inicialEndpointUser: UserEndpoint = {
  id_usuario: 0,
  nombre_usuario: "",
  email_usuario: "",
  tipo_usuario: "",
};
