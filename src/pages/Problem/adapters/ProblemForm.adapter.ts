import { ProblemFormEndpoint, ProblemFormTemplate } from "../models";
import { createEditEndpoint } from "./EditProblem.adapter";

/**
 * Función par adaptar la plantilla del formulario de creación de problemáticas para la API
 * @param formTemplate Plantilla del formulario para crear nuevas problemáticas
 * @returns Plantilla formateada
 */
export const createFormEndpoint = (
  formTemplate: ProblemFormTemplate
): ProblemFormEndpoint => {
  return {
    ...createEditEndpoint(formTemplate),
    publicado: formTemplate.isPublic,
  };
};
