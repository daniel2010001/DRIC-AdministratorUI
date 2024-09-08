import { Applicant, ApplicantEndpoint, ApplicantType } from "@/models";

/**
 * Función para adaptar un Solicitante recibido desde la API
 * @param applicant Solicitante recibido desde la API
 * @returns Solicitante formateado
 */
export const createCustomApplicant = (
  applicant: ApplicantEndpoint
): Applicant => {
  const applicantType =
    ApplicantType[applicant.tipo_solicitante as keyof typeof ApplicantType];
  return {
    id: applicant.id_solicitante,
    name: applicant.nombre_solicitante,
    shortName: applicant.nombre_corto_sigla,
    jurisdiction: applicant.jurisdiccion,
    type: applicantType ? applicantType : ApplicantType.INSTITUCION,
    createdAt: new Date(applicant.createdAt),
    updatedAt: new Date(applicant.updatedAt),
  };
};
