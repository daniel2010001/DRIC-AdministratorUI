import { DashboardIcon, DocumentListIcon, HomeIcon } from "@/assets/Icons";

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
    link: "/",
  },
  {
    title: "Panel de control",
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    title: "Problemáticas",
    icon: DocumentListIcon,
    options: [
      {
        title: "Lista de Problemáticas",
        link: "/problems",
      },
      {
        title: "Formulario",
        link: "/problem/new",
      },
    ],
  },
];
