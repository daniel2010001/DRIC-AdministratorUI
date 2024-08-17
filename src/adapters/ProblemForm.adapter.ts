import { ProblemFormEndpointTemplate, ProblemFormTemplate } from "@/models";
import { formatDate_YYYY_MM_DD } from "@/utilities";

/**
 * Función par adaptar la plantilla del formulario de creación de problemáticas para la API
 * @param formTemplate Plantilla del formulario para crear nuevas problemáticas
 * @returns Plantilla formateada
 */
export const createFormEndpointTemplate = (
  formTemplate: ProblemFormTemplate
) => {
  const formatFormEndpointTemplate: ProblemFormEndpointTemplate = {
    titulo: formTemplate.title,
    planteamiento: formTemplate.approach,
    causas: formTemplate.causes,
    efectos: formTemplate.effects,
    activo: formTemplate.active,

    que: formTemplate.what,
    como: formTemplate.who,
    para_que: formTemplate.why,
    cuando: formTemplate.when,

    contacto: formTemplate.contact,
    telefono: parseInt(formTemplate.phone || "0"),
    fecha: formatDate_YYYY_MM_DD(formTemplate.date || new Date()),
    zona: formTemplate.zone,

    id_solicitante: formTemplate.applicant?.id || 0,
    id_carrera: formTemplate.careers.map((career) => career.id),
  };

  return formatFormEndpointTemplate;
};
