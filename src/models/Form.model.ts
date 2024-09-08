/**
 * Interfaz para las opciones de un combobox
 */
export interface ComboBoxOption {
  /** Identificador del combobox */
  id: number;
  /** Nombre del combobox */
  name: string;
  /** Nombre corto del combobox */
  shortName: string;
}

/**
 * Interfaz para los campos de un formulario de creación de problemáticas
 */
export interface FieldConfig {
  /** Etiqueta del campo */
  label: string | JSX.Element;
  /** Descripción del campo */
  description?: string;
  /** Tipo del campo */
  type: string;
  /** Longitud mínima del campo */
  minLength?: number;
  /** Longitud máxima del campo */
  maxLength?: number;
  /** Indica si el campo es obligatorio */
  required?: boolean;
  /** Opciones del campo */
  options?: ComboBoxOption[];
  /** Valor por defecto del campo */
  defaultValue?: any;
  /** Indica si el campo es múltiple */
  multiple?: boolean;
}

/**
 * Interfaz para las secciones de un formulario de creación de problemáticas
 */
export interface FormSectionProps<T> {
  /** Título de la sección */
  title: string;
  /** Descripción de la sección */
  description: string;
  /** Campos del formulario */
  inputs: {
    /** La clave del campo en el objeto T */
    key: keyof T;
    /** Indica cuántas columnas ocupa el input (por ejemplo, 1 para medio ancho, 2 para ancho completo) */
    colSpan: number;
  }[];
}
