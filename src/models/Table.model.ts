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