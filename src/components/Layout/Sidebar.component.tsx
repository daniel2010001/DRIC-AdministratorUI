import { DropdownIcon, LogoutIcon } from "@/assets/Icons";
import { SidebarOptions } from "@/models";
import { resetAuth, resetUser } from "@/redux/states";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
    if (openDropdowns[title]) {
      const items = document.querySelectorAll(
        `#dropdown-${title.replace(/\s+/g, "-")}-example li`
      );
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("visible");
          item.classList.add("hiding");
        }, index * 200);
      });

      setTimeout(() => {
        setOpenDropdowns((prevState) => ({
          ...prevState,
          [title]: false,
        }));
      }, items.length * 100 + 500);
    } else {
      setOpenDropdowns((prevState) => ({
        ...prevState,
        [title]: true,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    Object.keys(openDropdowns).forEach((key) => {
      if (openDropdowns[key]) {
        const items = document.querySelectorAll(
          `#dropdown-${key.replace(/\s+/g, "-")}-example li`
        );
        items.forEach((item, index) => {
          item.classList.remove("hiding");
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 100);
        });
      }
    });
  }, [openDropdowns]);

  const iconClassName = clsx(
    "flex-shrink-0 w-5 h-5 transition duration-75",
    "text-white group-hover:text-white"
  );

  const sidebarOptionClassName = clsx(
    "flex items-center w-full text-base p-2 text-white",
    "hover:bg-gray-500 group transition duration-75 rounded-sm"
  );

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(resetAuth());
    dispatch(resetUser());
    window.location.reload();
  };

  return (
    <aside
      ref={sidebarRef}
      className={clsx(
        "fixed top-0 left-0 z-40 w-64 h-screen pt-20 border-r",
        "bg-[#0F172A] border-gray-200 transition-transform lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-[#0F172A]">
        <ul className="space-y-2 font-medium flex flex-col justify-between h-full">
          <div>
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
                      <ul
                        id={`dropdown-${option.title.replace(
                          /\s+/g,
                          "-"
                        )}-example`}
                        className={clsx("py-2 space-y-2 dropdown-menu")}
                      >
                        {option.options.map((dropdownOption, dropdownIndex) => (
                          <li key={dropdownIndex} className="dropdown-option">
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
          </div>
          <li className="flex items-center">
            <button
              type="button"
              className={sidebarOptionClassName}
              onClick={logout}
            >
              <LogoutIcon className={iconClassName} />
              <span className="ms-3">Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
