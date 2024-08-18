export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface EndpointUser {
  id_usuario: number;
  nombre_usuario: string;
  contrasenia_usuario: string;
  email_usuario: string;
  disponible: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserCreate {
  name: string;
  password: string;
  email: string;
}

export interface UserUpdate {
  name?: string;
  password?: string;
  email?: string;
}

export const inicialUser: User = {
  id: 0,
  name: "",
  password: "",
  email: "",
  enabled: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const inicialEndpointUser: EndpointUser = {
  id_usuario: 0,
  nombre_usuario: "",
  contrasenia_usuario: "",
  email_usuario: "",
  disponible: false,
  createdAt: "",
  updatedAt: "",
};
