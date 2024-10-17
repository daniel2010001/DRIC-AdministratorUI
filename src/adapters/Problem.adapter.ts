import { ProblemEndpoint, Problem, ProblemRequestEnpoint, ProblemRequest } from "@/models";
import { createCustomApplicant } from "./Applicant.adapter";
import { createCustomCareer } from "./Career.adapter";
import { createCustomUser } from "./User.adapter";

/**
 * Función para adaptar una problemática recibida desde la API
 * @param problematic Problematica recuperada de la API
 * @returns Problemática formateada
 * @error Si el id del solicitante no es el mismo que el que indica la problemática se genera un error.
 */
export const createCustomProblem = (problematic: ProblemEndpoint): Problem => {
  return {
    id: problematic.id_problematica,

    title: problematic.titulo,
    approach: problematic.planteamiento,
    causes: problematic.causas,
    effects: problematic.efectos,

    what: problematic.que,
    who: problematic.como,
    why: problematic.para_que,
    when: problematic.cuando,

    contactPosition: problematic.contacto_cargo,
    contactName: problematic.contacto_nombre,
    phone: problematic.telefono,
    cellPhone: problematic.telefono_institucional,
    zone: problematic.zona,

    publishedAt: new Date(problematic.publicado),
    updatedAt: new Date(problematic.actualizado),
    createdAt: new Date(problematic.creado),

    active: problematic.activo,
    validate: problematic.validado,

    applicant: createCustomApplicant(problematic.solicitante),
    careers: problematic.carreras.map(createCustomCareer),
  };
};

// mover a solicitudes/models
/**
 * Función para adaptar una solicitud de problemática recibida desde la API
 * @param problematicRequest Solicitud de problemática recuperada de la API
 * @returns Problemática formateada
 */
export const createCustomProblemRequest = (
  problematicRequest: ProblemRequestEnpoint
): ProblemRequest => {
  return {
    ...createCustomProblem(problematicRequest),
    user: createCustomUser(problematicRequest.usuario),
  };
};
