import { EndpointProblematic, Applicant, Problematic, Career } from "@/models";
/**
 * Función para adaptar una problemática recibida desde la API
 * @param problematic Problematica recuperada de la API
 * @param applicant Solicitante de la problemática
 * @param careers Carreras para la problemática
 * @returns Problemática formateada 
 * @error Si el id del solicitante no es el mismo que el que indica la problemática se genera un error.
 */
export const createProblematic = (
    problematic: EndpointProblematic,
    applicant: Applicant,
    careers: Career[]
): Problematic => {
    if (applicant.id !== problematic.solicitante_id) {
        throw new Error("El solicitante no es el correcto");
    }

    const formatProblematic: Problematic = {
        id: problematic.id_problematica,

        title: problematic.tituto,
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

        applicant: applicant,
        careers: careers
    };

    return formatProblematic;
};


