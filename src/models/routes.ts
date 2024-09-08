/**
 * Enumeración de las rutas públicas
 */
export enum PublicRoutes {
  /** Ruta principal */
  LOGIN = "/login",
}

/**
 * Enumeración de las rutas privadas
 */
export enum PrivateRoutes {
  /** Ruta principal */
  PRIVATE = "/private",
  /** Ruta de inicio */
  HOME = "home",
  /** Ruta de panel de control */
  DASHBOARD = "panel-de-control",
  /** Ruta principal de Problemáticas */
  PROBLEMS = "problemas",
  /** Ruta de solicitudes de Problemáticas */
  REQUESTS = "solicitudes",
  /** Ruta de todas las Problemáticas */
  PROBLEM_ALL = "todos",
  /** Ruta de ver una Problemática */
  PROBLEM_VIEW = "ver",
  /** Ruta de editar una Problemática */
  PROBLEM_EDIT = "editar",
  /** Ruta de crear una Problemática */
  PROBLEM_FORM = "nuevo",
}
