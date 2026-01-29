import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "./_features/header";
import { SideBarAgent } from "./_components/sideBarAgent";

export const metadata = {
  title: "Agent Dashboard",
};

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <SideBarAgent />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
