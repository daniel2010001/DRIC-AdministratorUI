import { ProblemEndpoint, Problem } from "@/models";
import { createCustomApplicant } from "./Applicant.adapter";
import { createCustomCareer } from "./Career.adapter";

/**
 * Función para adaptar una problemática recibida desde la API
 * @param problematic Problematica recuperada de la API
 * @returns Problemática formateada
 * @error Si el id del solicitante no es el mismo que el que indica la problemática se genera un error.
 */
export const createCustomProblem = (problematic: ProblemEndpoint): Problem => {
  const formatProblematic: Problem = {
    id: problematic.id_problematica,

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
    cellPhone: problematic.telefono_institucional.toString(),
    zone: problematic.zona,

    publishedAt: new Date(problematic.publicado),
    updatedAt: new Date(problematic.actualizado),
    createdAt: new Date(problematic.creado),

    active: problematic.activo,
    validate: problematic.validado,

    applicant: createCustomApplicant(problematic.solicitante),
    careers: problematic.carreras.map(createCustomCareer),
  };

  return formatProblematic;
};
