import { DashboardIcon, DocumentListIcon } from "@/assets/Icons";
import { PrivateRoutes } from "./routes";

/**
 * Interfaz para opciones de la barra lateral
 */
export interface SidebarOption {
  /** Título de la opción */
  title: string;
  /** Icono de la opción */
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  /** Enlace de la opción */
  link: string;
}

/**
 * Interfaz para opciones de dropdown de la barra lateral
 */
export interface SidebarDropdownOption {
  /** Título de la opción */
  title: string;
  /** Enlace de la opción */
  link: string;
}

/**
 * Interfaz para dropdown de la barra lateral
 */
export interface SidebarDropdown {
  /** Título del dropdown */
  title: string;
  /** Icono del dropdown */
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  /** Opciones del dropdown */
  options: SidebarDropdownOption[];
}

/**
 * Barra lateral con opciones y dropdowns
 */
export const SidebarOptions: (SidebarOption | SidebarDropdown)[] = [
  {
    title: "Panel de control",
    icon: DashboardIcon,
    link: PrivateRoutes.DASHBOARD,
  },
  {
    title: "Problemáticas",
    icon: DocumentListIcon,
    options: [
      {
        title: "Lista de problemáticas",
        link: PrivateRoutes.PROBLEMS,
      },
      {
        title: "Lista de solicitudes",
        link: `${PrivateRoutes.PROBLEMS}/${PrivateRoutes.REQUESTS}`,
      },
      {
        title: "Registrar problemática",
        link: `${PrivateRoutes.PROBLEMS}/${PrivateRoutes.PROBLEM_FORM}`,
      },
    ],
  },
];
