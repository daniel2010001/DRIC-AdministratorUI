import { Career, Applicant } from "@/models";
/**
 * Interfaz de las Problemáticas adaptada para el front end.
 */
export interface Problematic {
    id: number;

    title: string;
    approach: string; // :v
    causes: string;
    effects: string;

    what: string;
    who: string;
    why: string;
    when: string;

    contact: string;
    phone: number;
    date: Date;
    zone: string;

    applicant: Applicant;
    careers: Career[];
};

/**
 * Interfaz para las Problemáticas recividos desde la API
 */
export interface EndpointProblematic {
    id_problematica: number;

    tituto: string;
    planteamiento: string;
    causas: string;
    efectos: string;

    que: string;
    como: string;
    para_que: string;
    cuando: string;

    contacto: string;
    telefono: number;
    fecha: string;
    zona: string;

    solicitante_id: number;
    // actualizar cuando el back mande los ids de las carreras :v
    
    fecha_registro: string;
    activo: boolean;
};
