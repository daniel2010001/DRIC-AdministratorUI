import { ApplicantEndpoint, Applicant } from "@/models";

/**
 * Función para adaptar un Solicitante recibido desde la API
 * @param applicant Solicitante recibido desde la API
 * @returns Solicitante formateado
 */
export const createCustomApplicant = (
  applicant: ApplicantEndpoint
): Applicant => {
  const formatInstitute: Applicant = {
    id: applicant.id_solicitante,
    name: applicant.nombre_solicitante,
    shortName: applicant.nombre_corto_sigla,
    jurisdiction: applicant.jurisdiccion,
    type: applicant.tipo_solicitante,
    createdAt: new Date(applicant.createdAt),
    updatedAt: new Date(applicant.updatedAt),
  };

  return formatInstitute;
};
