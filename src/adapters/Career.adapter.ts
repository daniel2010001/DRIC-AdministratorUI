import { CareerEndpoint, Career } from "@/models";

/**
 * Función para adaptar una Carrera recibida desde la API
 * @param career Carrera recibida desde la API
 * @returns Carrera formateada
 */
export const createCustomCareer = (career: CareerEndpoint): Career => {
  return {
    id: career.id_carrera,
    name: career.nombre_carrera,
    shortName: career.nombre_corto,
    faculty: career.facultad,
    createdAt: new Date(career.createdAt),
    updatedAt: new Date(career.updatedAt),
  };
};
