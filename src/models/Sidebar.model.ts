import { DashboardIcon, DocumentListIcon, HomeIcon } from "@/assets";

export interface SidebarOption {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
}

export interface SidebarDropdownOption {
  title: string;
  link: string;
}

export interface SidebarDropdown {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  options: SidebarDropdownOption[];
}

interface Sidebar {
  options: (SidebarOption | SidebarDropdown)[];
}

export const SidebarOptions: Sidebar = {
  options: [
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
          link: "/forms",
        },
      ],
    },
  ],
};
