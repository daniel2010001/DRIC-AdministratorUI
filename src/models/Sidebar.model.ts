export interface SidebarOption {
  id: string;
  title: string;
  icon: string;
  link: string;
}

export interface SidebarMenuOption {
  id: string;
  title: string;
  icon: string;
  link: string;
  children?: SidebarMenuOption[];
}

export interface Sidebar {
  options: (SidebarOption | SidebarOption[])[];
}

export const Sidebar: Sidebar = {
  options: [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: "mdi:view-dashboard",
      link: "/dashboard",
    },
    {
      id: "kanban",
      title: "Kanban",
      icon: "mdi:view-parallel",
      link: "/kanban",
    },
    {
      id: "inbox",
      title: "Inbox",
      icon: "mdi:inbox",
      link: "/inbox",
    },
    {
      id: "users",
      title: "Users",
      icon: "mdi:account-multiple",
      link: "/users",
    },
    {
      id: "products",
      title: "Products",
      icon: "mdi:store",
      link: "/products",
    },
    {
      id: "sign-in",
      title: "Sign In",
      icon: "mdi:login",
      link: "/sign-in",
    },
    {
      id: "sign-up",
      title: "Sign Up",
      icon: "mdi:account-plus",
      link: "/sign-up",
    },
  ],
};
