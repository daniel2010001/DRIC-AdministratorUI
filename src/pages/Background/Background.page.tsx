import { Header, Sidebar } from "@/components";
import React from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <main className="sm:ml-64 mt-16 flex flex-col justify-center items-center -z-10">
        <div className="p-4">{children}</div>
      </main>
    </>
  );
}
