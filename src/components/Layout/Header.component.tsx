import clsx from "clsx";

import UmssLogo from "../../assets/img/LogoUmss.png";
import LogoApp from "../../assets/img/iptu.png";

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <nav
      className={clsx("fixed top-0 h-16 z-50 w-full bg-[#5c74a4] shadow-lg")}
    >
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              type="button"
              data-hover="true"
              className="inline-flex items-center p-2 text-sm text-white rounded-lg lg:hidden hover:bg-back-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                />
              </svg>
            </button>

            <img src={UmssLogo} alt="UMSS Logo" className="md:h-12 h-8 ml-4" />
            <img
              src={LogoApp}
              alt="Logo App"
              className="md:h-8 h-8 ml-4 md:ml-6"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

