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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";
import {
  Award,
  Clipboard,
  ClipboardList,
  LogOut,
  PackageCheck,
  PackageX,
} from "lucide-react";

const menuItemsSubscription = [
  {
    title: "Нээлттэй захиалга",
    icon: Clipboard,
    url: "/agent",
  },
  {
    title: "Судалж буй захиалга",
    icon: ClipboardList,
    url: "/agent/pendingOrder",
  },
  {
    title: "Амжилттай захиалга",
    icon: PackageCheck,
    url: "/agent/completedOrder",
  },
  {
    title: "Цуцлагдсан захиалга",
    icon: PackageX,
    url: "/agent/cancelledOrder",
  },
];

const menuItemsAwardAndOthers = [
  {
    title: "Урамшуулал",
    icon: Award,
    url: "/agent/reward",
  },
  {
    title: "Гарах",
    icon: LogOut,
    url: "/",
  },
];

export function SideBarAgent() {
  return (
    <Sidebar className="[--sidebar:theme(colors.white)]">
      <SidebarHeader className="hidden min-[375px]:block min-[640px]:dark:bg-gray-800">
        <div className="flex items-center gap-2 px-2 py-1">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-lg font-bold">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Agent Buy</span>
            <span className="text-xs text-muted-foreground">
              Agent Dashboard
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="min-[640px]:dark:bg-gray-800">
        <SidebarGroup>
          <SidebarGroupLabel>Захиалга</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItemsSubscription.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
        <SidebarGroup>
          <SidebarGroupLabel>Урамшуулал ба бусад</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItemsAwardAndOthers.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.title === "Гарах" ? (
                      <SignOutButton redirectUrl="/">
                        <button className="flex items-center gap-2 w-full text-left px-2 py-1">
                          <item.icon />
                          <span>{item.title}</span>
                        </button>
                      </SignOutButton>
                    ) : (
                      <a
                        href={item.url}
                        className="flex items-center gap-2 px-2 py-1"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className=" min-[640px]:dark:bg-gray-800">
        <div className="px-2 py-1 text-xs text-muted-foreground">
          © 2026 Agent Buy
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
