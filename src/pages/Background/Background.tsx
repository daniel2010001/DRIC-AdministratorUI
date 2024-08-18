import { Header, Sidebar } from "@/components";
import React from "react";

export function Background({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (!isSidebarOpen) return;
    console.log("closeSidebar");
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
}

export default Background;
