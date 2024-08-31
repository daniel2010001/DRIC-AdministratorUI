/**
 * Interfaz para los datos principales del dashboard
 */
export interface DashboardEndpoint {
    problematicas: number;
    entidades: number;
    usuarios: number;
    solicitudes: number;
    publicadas: number;
    noPublicadas: number;
    municipios: number;
    instituciones: number;
    activos: number;
    inactivos: number;
  }
  
  /**
   * Interfaz para los detalles de cada Card
   */
  export interface CardDetail {
    label: string;
    value: number;
  }
  
  /**
   * Interfaz para las propiedades de cada tarjeta
   */
  export interface DashboardCard {
    icon: JSX.Element;
    title: string;
    number: number;
    link?: string;
    detalles?: CardDetail[];
  }
  