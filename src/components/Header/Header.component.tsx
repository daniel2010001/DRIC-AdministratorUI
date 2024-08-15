import clsx from "clsx";
import { useEffect, useState } from "react";

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const osPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (userTheme === "dark" || (!userTheme && osPrefersDark)) {
      document.body.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 h-16 z-50 w-full bg-white border-b border-gray-200",
        "dark:bg-gray-800 dark:border-gray-700"
      )}
    >
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              type="button"
              data-hover="true"
              className={clsx(
                "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden",
                "hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200",
                "dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              )}
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              Cambiar a {isDarkMode ? "Claro" : "Oscuro"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
