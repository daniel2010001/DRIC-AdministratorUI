import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarOptions } from "@/models";
import { DropdownIcon } from "@/assets/DropdownIcon";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export function Sidebar({ isOpen, closeSidebar }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});

  const handleClickOutside = (event: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const iconClassName = clsx(
    "flex-shrink-0 w-5 h-5 transition duration-75",
    "text-gray-500 group-hover:text-gray-900",
    "dark:text-gray-400 dark:group-hover:text-white"
  );

  const sidebarOptionClassName = clsx(
    "flex items-center w-full text-base p-2 text-gray-900",
    "hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    "group transition duration-75 rounded-lg"
  );

  return (
    <aside
      ref={sidebarRef}
      className={clsx(
        "fixed top-0 left-0 z-40 w-64 h-screen pt-20 border-r",
        "bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700",
        "transition-transform lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {SidebarOptions.map((option, index) => (
            <li key={index}>
              {"options" in option ? (
                <>
                  <button
                    type="button"
                    className={sidebarOptionClassName}
                    onClick={() => toggleDropdown(option.title)}
                  >
                    <option.icon className={iconClassName} />
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      {option.title}
                    </span>
                    <DropdownIcon className="w-3 h-3 m-2" />
                  </button>
                  {openDropdowns[option.title] && (
                    <ul id="dropdown-example" className="py-2 space-y-2">
                      {option.options.map((dropdownOption, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <Link
                            to={dropdownOption.link}
                            className={clsx(sidebarOptionClassName, "pl-11")}
                          >
                            {dropdownOption.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={option.link} className={sidebarOptionClassName}>
                  <option.icon className={iconClassName} />
                  <span className="ms-3">{option.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
