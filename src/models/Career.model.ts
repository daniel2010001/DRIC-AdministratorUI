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
};

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
};