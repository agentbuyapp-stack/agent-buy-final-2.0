"use client";
import { UserButton } from "@clerk/nextjs";
import {
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  User,
  User2Icon,
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/app/_components/ThemeToggle";
import { useState } from "react";

export const Header = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  return (
    <header className="w-full h-16 shrink-0 flex items-center px-10 justify-between dark:bg-gray-800">
      <div className="flex items-center gap-2 px-2 py-1 shrink-0">
        <SidebarTrigger className="md:hidden mr-2" />
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <span className="text-lg font-bold">A</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Agent Buy</span>
          <span className="text-xs text-muted-foreground">Agent Dashboard</span>
        </div>
        <button>
          <UserButton />
        </button>
      </div>
      <div className="flex items-center gap-2 min-[640px]:gap-4">
        <ThemeToggle />

        <button className="relative w-9 h-9 min-[640px]:w-10 min-[640px]:h-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
          <Bell className="w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 w-4 h-4 min-[640px]:w-5 min-[640px]:h-5 bg-red-500 text-white text-[10px] min-[640px]:text-xs font-bold rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 min-[640px]:gap-3 p-1.5 min-[640px]:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            <img
              src="./alipay.png"
              alt="Profile"
              className="w-8 h-8 min-[640px]:w-9 min-[640px]:h-9 rounded-lg object-cover ring-2 ring-gray-200 dark:ring-gray-600"
            />
            <div className="hidden min-[640px]:flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-800 dark:text-white">
                Username
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Хэрэглэгч
              </span>
            </div>
            <ChevronDown
              className={`hidden min-[640px]:block w-4 h-4 text-gray-500 transition-transform duration-200 ${showProfileMenu ? "rotate-180" : ""}`}
            />
          </button>
          {showProfileMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowProfileMenu(false)}
              />
              <div className="absolute right-0 top-full mt-2 w-48 min-[640px]:w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-in fade-in zoom-in duration-200">
                <div className="min-[640px]:hidden px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">
                    Username
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    user@email.com
                  </p>
                </div>

                <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    Миний профайл
                  </span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-200">
                    Тохиргоо
                  </span>
                </button>
                <div className="h-px bg-gray-100 dark:bg-gray-700 my-1" />
                <button className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-red-600 dark:text-red-400">
                    Гарах
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
