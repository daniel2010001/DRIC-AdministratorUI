import { createCustomApplicant, createCustomCareer } from "@/adapters";
import { EditProblemEndpoint, EditProblemTemplate } from "../models";
import { ProblemEndpoint } from "@/models";

export const crearteEditTemplate = (editTemplate: ProblemEndpoint) => {
  const formatEditTemplate: EditProblemTemplate = {
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
    contact: editTemplate.contacto,
    cellPhone: editTemplate.telefono_institucional.toString(),
    phone: editTemplate.telefono.toString(),
  };

  return formatEditTemplate;
};

/**
 * Función par adaptar la plantilla del formulario de creación de problemáticas para la API
 * @param editTemplate Plantilla del formulario para crear nuevas problemáticas
 * @returns Plantilla formateada
 */
export const createEditEndpoint = (editTemplate: EditProblemTemplate) => {
  const formatFormEndpointTemplate: EditProblemEndpoint = {
    titulo: editTemplate.title,
    id_carrera: editTemplate.careers.map((career) => career.id),
    planteamiento: editTemplate.approach,
    causas: editTemplate.causes,
    efectos: editTemplate.effects,
    que: editTemplate.what,
    como: editTemplate.who,
    para_que: editTemplate.why,
    cuando: editTemplate.when,
    solicitante_id: editTemplate.applicant?.id || 0,
    zona: editTemplate.zone,
    contacto: editTemplate.contact,
    telefono: parseInt(editTemplate.cellPhone),
    telefono_institucional: parseInt(editTemplate.phone),
  };

  return formatFormEndpointTemplate;
};
