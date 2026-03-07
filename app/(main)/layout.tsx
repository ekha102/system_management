import { getUserFromToken } from "@/lib/auth";
import AdminShell from "./AdminShell";
import MaintenanceBanner from "./MaintenanceBanner";


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tokenUser = await getUserFromToken();
  return (
    <>
      <MaintenanceBanner />
      <AdminShell tokenUser={tokenUser}>{children}</AdminShell>
    </>
  );
}