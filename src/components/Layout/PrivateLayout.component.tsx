import { ReactNode, useState } from "react";
import { Header, Sidebar } from ".";

export const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    if (!isSidebarOpen) return;
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <main className="lg:ml-64 mt-16 flex flex-col justify-center items-center -z-10 light-primary dark:dark-primary">
        <div className="flex p-4 w-full min-h-[calc(100vh-64px)]">
          {children}
        </div>
      </main>
    </>
  );
};

export default PrivateLayout;
