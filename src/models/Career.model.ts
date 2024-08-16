/**
 * Interfaz de las Carrera adaptada para el front end.
 */
export interface Career {
  id: number;
  name: string;
  shortName: string;
  faculty: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interfaz para las Carrera recividos desde la API
 */
export interface EndpointCareer {
  id_carrera: number;
  nombre_carrera: string;
  nombre_corto: string;
  facultad: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Default Career
 */
export const defaultCareer: Career = {
  id: 0,
  name: "",
  shortName: "",
  faculty: "",
  createdAt: new Date(),
  updatedAt: new Date(),
};

/**
 * Default EndpointCareer
 */
export const defaultEndpointCareer: EndpointCareer = {
  id_carrera: 0,
  nombre_carrera: "",
  nombre_corto: "",
  facultad: "",
  createdAt: "",
  updatedAt: "",
};
