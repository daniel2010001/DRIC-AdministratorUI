import { ProblemFormTemplate, ProblemFormEndpoint } from "../models";

/**
 * Función par adaptar la plantilla del formulario de creación de problemáticas para la API
 * @param formTemplate Plantilla del formulario para crear nuevas problemáticas
 * @returns Plantilla formateada
 */
export const createFormEndpoint = (formTemplate: ProblemFormTemplate) => {
  const formatFormEndpointTemplate: ProblemFormEndpoint = {
    titulo: formTemplate.title,
    id_carrera: formTemplate.careers.map((career) => career.id),
    planteamiento: formTemplate.approach,
    causas: formTemplate.causes,
    efectos: formTemplate.effects,
    que: formTemplate.what,
    como: formTemplate.who,
    para_que: formTemplate.why,
    cuando: formTemplate.when,
    solicitante_id: formTemplate.applicant?.id || 0,
    zona: formTemplate.zone,
    contacto: formTemplate.contact,
    telefono: parseInt(formTemplate.cellPhone),
    telefono_institucional: parseInt(formTemplate.phone),
    publicado: formTemplate.isPublic,
  };

  return formatFormEndpointTemplate;
};
