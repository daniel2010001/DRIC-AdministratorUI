/**
 * Interfaz de los Solicitantes adaptada para el front end.
 */
export interface Applicant {
    id: number;
    name: string;
    shortName: string;
    jurisdiction: string;
    type: 'INSTITUCION' | 'MUNICIPIO';
    createdAt: Date;
    updatedAt: Date;
};

/**
 * Interfaz para los Solicitantes recividos desde la API
 */
export interface EndpointApplicant {
    id_solicitante: number;
    nombre_solicitante: string;
    nombre_corto_sigla: string;
    juridiccion: string;
    tipo_solicitante: 'INSTITUCION' | 'MUNICIPIO';
    createdAt: string;
    updatedAt: string;
};
