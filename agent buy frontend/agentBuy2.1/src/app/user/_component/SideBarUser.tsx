"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { FolderClosed, FolderPlus, PanelLeftClose } from "lucide-react";

const menuItems = [
  {
    title: "Шинэ захиалга",
    icon: FolderPlus,
    url: "/user",
  },
  {
    title: "Үүсгэсэн захиалгууд",
    icon: FolderClosed,
    url: "/user/orders",
  },
  {
    title: "Гарах",
    icon: PanelLeftClose,
    url: "/",
  },
];

export function SideBarUser() {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="min-[640px]:dark:bg-gray-800">
        <div className="flex items-center gap-2 px-2 py-1 group-data-[collapsible=icon]:justify-center ">
          <button
            onClick={toggleSidebar}
            className="flex size-8 items-center justify-center rounded-lg bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] text-white cursor-pointer hover:scale-105 transition-transform shrink-0"
          >
            <span className="text-lg font-bold">A</span>
          </button>
          <div className="flex flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Agent Buy</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="min-[640px]:dark:bg-gray-800">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="min-[640px]:dark:bg-gray-800">
        <div className="px-2 py-1 text-xs text-muted-foreground ">
          © 2026 Agent Buy
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
