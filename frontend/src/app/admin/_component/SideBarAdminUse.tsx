"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBarAdmin } from "./SidebarComp";
import { ThemeToggle } from "@/app/_components/ThemeToggle";

export const SideBarAdminUse = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SidebarProvider>
      <div className="flex w-full h-screen">
        <SideBarAdmin />
        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between p-2 border-b">
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 p-4 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
