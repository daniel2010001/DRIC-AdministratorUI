import { Applicant } from "./Applicant.model";

/**
 * Modelo de tabla para el componente Table
 */
export interface TableHeader {
  id: number;
  title: string;
  institución: string;
  publishedAt: Date;
  updatedAt: Date;
  createdAt: Date;
  actions: string;
}

/**
 * Modelo para el body de la tabla
 */
export interface TableBody {
  id: number;
  title: string;
  institution: string;
  publishedAt: Date;
  updatedAt: Date;
  createdAt: Date;
  actions: string;
}
export interface ColumnTable {
  property: string;
  label: string;
  minWidth?: number | string;
  align?: "right";
  format?: (value: Date) => string;
  formatObjet?: (value: Applicant) => string;
}
