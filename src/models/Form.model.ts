import { ProblemFormTemplate } from "../pages/ProblemForm/models/ProblemForm.model";

/**
 * Interfaz para las opciones de un combobox
 */
export interface ComboBoxOption {
  id: number;
  name: string;
  shortName: string;
}

/**
 * Interfaz para los campos de un formulario de creación de problemáticas
 */
export interface FieldConfig {
  label: string | JSX.Element;
  description?: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  options?: ComboBoxOption[];
  defaultValue?: any;
  multiple?: boolean;
}

/**
 * Interfaz para las secciones de un formulario de creación de problemáticas
 */
export interface FormSectionProps<T> {
  title: string;
  description: string;
  inputs: {
    /** La clave del campo en el objeto T */
    key: keyof T;
    /** Indica cuántas columnas ocupa el input (por ejemplo, 1 para medio ancho, 2 para ancho completo) */
    colSpan: number;
  }[];
}
