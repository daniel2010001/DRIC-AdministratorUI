import { DashboardIcon, DocumentListIcon, HomeIcon } from "@/assets/Icons";
import { PrivateRoutes } from "./routes";

/**
 * Interfaz para opciones de la barra lateral
 */
export interface SidebarOption {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
}

/**
 * Interfaz para opciones de dropdown de la barra lateral
 */
export interface SidebarDropdownOption {
  title: string;
  link: string;
}

/**
 * Interfaz para dropdown de la barra lateral
 */
export interface SidebarDropdown {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  options: SidebarDropdownOption[];
}

/**
 * Barra lateral con opciones y dropdowns
 */
export const SidebarOptions: (SidebarOption | SidebarDropdown)[] = [
  {
    title: "Inicio",
    icon: HomeIcon,
    link: PrivateRoutes.HOME,
  },
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
        title: "Formulario",
        link: `${PrivateRoutes.PROBLEMS}/${PrivateRoutes.PROBLEM_FORM}`,
      },
    ],
  },
];
