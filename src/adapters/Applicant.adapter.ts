import { Applicant, ApplicantEndpoint, ApplicantType } from "@/models";

/**
 * Función para adaptar un Solicitante recibido desde la API
 * @param applicantEndpoint Solicitante recibido desde la API
 * @returns Solicitante formateado
 */
export const createCustomApplicant = (applicantEndpoint: ApplicantEndpoint): Applicant => {
  const type = Object.keys(ApplicantType).find(
    (key) => ApplicantType[key as keyof typeof ApplicantType] === applicantEndpoint.tipo_solicitante
  );
  return {
    id: applicantEndpoint.id_solicitante,
    name: applicantEndpoint.nombre_solicitante,
    shortName: applicantEndpoint.nombre_corto_sigla,
    jurisdiction: applicantEndpoint.jurisdiccion,
    type: type ? ApplicantType[type as keyof typeof ApplicantType] : ApplicantType.UNKNOWN,
    createdAt: new Date(applicantEndpoint.createdAt),
    updatedAt: new Date(applicantEndpoint.updatedAt),
  };
};
