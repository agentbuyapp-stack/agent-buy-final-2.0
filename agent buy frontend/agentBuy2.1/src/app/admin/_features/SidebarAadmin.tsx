"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SideBarAdmin } from "../_component/SidebarComp";

export const SideBarSection = () => {
  return (
    <div className="flex min-h-screen">
      {/* <SideBarComp /> */}
      <SideBarAdmin />

      <div className="flex-1 flex flex-col">
        <div className="md:hidden p-2">
          <SidebarTrigger />
        </div>
      </div>
    </div>
  );
};
