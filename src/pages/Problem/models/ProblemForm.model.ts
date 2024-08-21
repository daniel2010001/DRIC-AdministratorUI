import {
  EditProblemEndpoint,
  EditProblemTemplate,
  inicialEditProblem,
} from ".";

/**
 * Interfaz para el formulario de creación de las problemáticas
 */
export interface ProblemFormTemplate extends EditProblemTemplate {
  isPublic: boolean;
}

/**
 * Interfaz para el formulario de creación de problemáticas para la API
 */
export interface ProblemFormEndpoint extends EditProblemEndpoint {
  publicado: boolean;
}

/**
 * Inicial ProblemFormTemplate
 */
export const inicialProblemForm: ProblemFormTemplate = {
  ...inicialEditProblem,
  isPublic: false,
};
