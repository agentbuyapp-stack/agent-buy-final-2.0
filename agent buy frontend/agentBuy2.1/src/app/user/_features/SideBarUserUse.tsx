import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBarUser } from "../_component/SideBarUser";

export const SideBarUserUse = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <SideBarUser />
        <div className="flex-1 flex flex-col ">
          <div className="md:hidden p-2">
            <SidebarTrigger />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};
