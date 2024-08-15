import { FormEndpointTemplate, FormTemplate } from "@/models";
import { formatDate_YYYY_MM_DD } from "@/utilities";

/**
 * Función par adaptar la plantilla del formulario de creación de problemáticas para la API
 * @param formTemplate Plantilla del formulario para crear nuevas problemáticas
 * @returns Plantilla formateada
 */
export const createFormEndpointTemplate = (formTemplate: FormTemplate) => {
  const formatFormEndpointTemplate: FormEndpointTemplate = {
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
    telefono: formTemplate.phone,
    fecha: formatDate_YYYY_MM_DD(formTemplate.date),
    zona: formTemplate.zone,

    id_solicitante: formTemplate.applicant.id,
    id_carrera: formTemplate.careers.map((career) => career.id),
  };

  return formatFormEndpointTemplate;
};
