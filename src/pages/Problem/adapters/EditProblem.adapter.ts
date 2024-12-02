import { createCustomApplicant, createCustomCareer } from "@/adapters";
import { EditProblemEndpoint, EditProblemTemplate } from "../models";
import { ProblemEndpoint } from "@/models";

export const crearteEditTemplate = (editTemplate: ProblemEndpoint): EditProblemTemplate => {
  return {
    title: editTemplate.titulo,
    careers: editTemplate.carreras.map(createCustomCareer),
    approach: editTemplate.planteamiento,
    causes: editTemplate.causas,
    effects: editTemplate.efectos,
    what: editTemplate.que,
    who: editTemplate.como,
    why: editTemplate.para_que,
    when: editTemplate.cuando,
    applicant: createCustomApplicant(editTemplate.solicitante),
    zone: editTemplate.zona,
    contactPosition: editTemplate.contacto_nombre,
    cellPhone: editTemplate.telefono.toString(),
    phone: editTemplate.telefono_institucional.toString(),
    contactName: editTemplate.contacto_nombre,
    validate: editTemplate.validado,
  };
};

/**
 * Función par adaptar la plantilla del formulario de creación de problemáticas para la API
 * @param editTemplate Plantilla del formulario para crear nuevas problemáticas
 * @returns Plantilla formateada
 */
export const createEditEndpoint = (editTemplate: EditProblemTemplate): EditProblemEndpoint => {
  return {
    titulo: editTemplate.title,
    id_carrera: editTemplate.careers.map((career) => career.id),
    planteamiento: editTemplate.approach,
    causas: editTemplate.causes,
    efectos: editTemplate.effects,
    que: editTemplate.what,
    como: editTemplate.who,
    para_que: editTemplate.why,
    cuando: editTemplate.when,
    id_solicitante: editTemplate.applicant?.id || 0,
    zona: editTemplate.zone,
    contacto_cargo: editTemplate.contactPosition,
    contacto_nombre: editTemplate.contactName,
    telefono: editTemplate.cellPhone,
    telefono_institucional: editTemplate.phone,
    validado: editTemplate.validate,
  };
};
