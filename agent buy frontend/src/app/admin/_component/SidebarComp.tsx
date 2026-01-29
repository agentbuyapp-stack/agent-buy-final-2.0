"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { ShoppingCart, BarChart, Settings, Users, Gift } from "lucide-react";

import Link from "next/link";

const menuItems = [
  { title: "Захиалгууд", icon: ShoppingCart, url: "/admin/orders" },
  { title: "Карго", icon: BarChart, url: "/admin/cargo" },
  { title: "Урамшуулал", icon: Gift, url: "/admin/bonus" },
  { title: "Агентууд", icon: Users, url: "/admin/agents" },
  { title: "Тохиргоо", icon: Settings, url: "/admin/settings" },
];

export const SideBarAdmin = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      {/* HEADER */}
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-1 group-data-[collapsible=icon]:justify-center">
          <button
            onClick={toggleSidebar}
            className="flex size-8 items-center justify-center rounded-lg bg-linear-to-r from-[#0b4ce5] to-[#4a90e2] text-white hover:scale-105 transition-transform shrink-0"
          >
            <span className="text-lg font-bold">A</span>
          </button>

          <div className="flex flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">Agent Buy</span>
          </div>
        </div>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <div className="px-2 py-1 text-xs text-muted-foreground">
          © 2026 Agent Buy
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
