import AdminShell from "./AdminShell";
import MaintenanceBanner from "./MaintenanceBanner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MaintenanceBanner />
      <AdminShell>{children}</AdminShell>
    </>
  );
}