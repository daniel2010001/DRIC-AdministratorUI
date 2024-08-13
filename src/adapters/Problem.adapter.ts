import { EndpointProblem, Problem, FormTemplate, FormEndpointTemplate } from "@/models";
import { createApplicant } from "./Applicant.adapter";
import { createCareer } from "./Career.adapter";
import { shorFormatDate } from "@/utilities";
/**
 * Función para adaptar una problemática recibida desde la API
 * @param problematic Problematica recuperada de la API
 * @returns Problemática formateada 
 * @error Si el id del solicitante no es el mismo que el que indica la problemática se genera un error.
 */
export const createProblematic = (problematic: EndpointProblem): Problem => {
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
        phone: problematic.telefono,
        date: new Date(problematic.fecha),
        zone: problematic.zona,

        publishedAt: new Date(problematic.publicado),
        updatedAt: new Date(problematic.actualizado),
        createdAt: new Date(problematic.creado),

        applicant: createApplicant(problematic.solicitante),
        careers: problematic.carreras.map(createCareer)
    };

    return formatProblematic;
};

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
        que: formTemplate.what,
        como: formTemplate.who,
        para_que: formTemplate.why,
        cuando: formTemplate.when,
        contacto: formTemplate.contact,
        telefono: formTemplate.phone,
        fecha: shorFormatDate(formTemplate.date),
        zona: formTemplate.zone,
        id_solicitante: formTemplate.applicant.id,
        id_carrera: formTemplate.careers.map(career => (career.id))
    };

    return formatFormEndpointTemplate;
};


