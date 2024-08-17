import { EndpointProblem, Problem } from "@/models";
import { createApplicant } from "./Applicant.adapter";
import { createCareer } from "./Career.adapter";

/**
 * Función para adaptar una problemática recibida desde la API
 * @param problematic Problematica recuperada de la API
 * @returns Problemática formateada
 * @error Si el id del solicitante no es el mismo que el que indica la problemática se genera un error.
 */
export const createProblematic = (problematic: EndpointProblem): Problem => {
  const formatProblematic: Problem = {
    id: problematic.id_problematica,
    active: problematic.activo,

    title: problematic.titulo,
    approach: problematic.planteamiento,
    causes: problematic.causas,
    effects: problematic.efectos,

    what: problematic.que,
    who: problematic.como,
    why: problematic.para_que,
    when: problematic.cuando,

    contact: problematic.contacto,
    phone: problematic.telefono.toString(),
    date: new Date(problematic.fecha),
    zone: problematic.zona,

    publishedAt: new Date(problematic.publicado),
    updatedAt: new Date(problematic.actualizado),
    createdAt: new Date(problematic.creado),

    applicant: createApplicant(problematic.solicitante),
    careers: problematic.carreras.map(createCareer),
  };

  return formatProblematic;
};
