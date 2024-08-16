import { ProblemFormTemplate } from "./ProblemForm.model";

/**
 * Interfaz para los campos de un formulario de creación de problemáticas
 */
export interface FieldConfig {
  label: string;
  description?: string;
  type: string;
  maxLength?: number;
  required?: boolean;
  options?: any[];
  defaultValue?: any;
}

/**
 * Interfaz para las secciones de un formulario de creación de problemáticas
 */
export interface FormSectionProps {
  title: string;
  description: string;
  inputs: {
    /** La clave de `FormTemplate` que se usará para buscar en `formConfig` */
    key: keyof ProblemFormTemplate;
    /** Indica cuántas columnas ocupa el input (por ejemplo, 1 para medio ancho, 2 para ancho completo) */
    colSpan: number;
  }[];
}
