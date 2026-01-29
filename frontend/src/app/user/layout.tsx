import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "./_component/Header";
import { SideBarUserUse } from "./_features/SideBarUserUse";

export const metadata = {
  title: "User Dashboard",
};

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SideBarUserUse />
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">{children}</div>
      </div>
    </SidebarProvider>
  );
}
