import { SideBarAdminUse } from "./_component/SideBarAdminUse";

export const metadata = {
  title: "Admin Dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SideBarAdminUse>{children}</SideBarAdminUse>;
}
