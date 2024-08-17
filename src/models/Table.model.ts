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
 * Modelo para cada dato de la tabla
 */
export interface Problems {
  id: number;
  title: string;
  applicant: string;
  updatedAt: string;
  publishedAt: string;
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

export type Order = "asc" | "desc";

export interface EnhancedTableProps {
  order: Order;
  orderBy: string;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Problems
  ) => void;
  // propiedas futuras que se pueden agregar
  numSelected?: number;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount?: number;
}
