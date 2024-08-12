import { EndpointCareer, Career } from "@/models";

/**
 * Función para adaptar una Carrera recibida desde la API
 * @param career Carrera recibida desde la API
 * @returns Carrera formateada
 */
export const createCareer = (career: EndpointCareer): Career => {
    const formatCarrera: Career = {
        id: career.id_carrera,
        name: career.nombre_carrera,
        shortName: career.nombre_corto,
        faculty: career.facultad
    };

    return formatCarrera;
};
