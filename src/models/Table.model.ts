import { Applicant } from "./Applicant.model";

/**
 * Modelo de tabla para el componente Table
 */
export interface TableHeader {
  id: number;
  title: string;
  institution: string;
  publishedAt: Date;
  updatedAt: Date;
  createdAt: Date;
  actions: string;
}

/**
 * Modelo para cada dato de la tabla
 */
export interface ProblemTable {
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

export interface EnhancedTableProps<T> {
  order: Order;
  orderBy: keyof T;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
  headCells: readonly HeadCell<T>[];
  // propiedas futuras que se pueden agregar
  numSelected?: number;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount?: number;
}

export interface HeadCell<T> {
  property: keyof T;
  label: string;
  numeric: boolean;
  disablePadding: boolean;
  isOrder: boolean;
  align?: "right" | "center" | "left";
  minWidth?: string;
  isAction?: boolean;
  isStatus?: boolean;
  isRequest?: boolean;
}
