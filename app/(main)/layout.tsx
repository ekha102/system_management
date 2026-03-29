
import AdminShell from "./AdminShell";
import MaintenanceBanner from "./MaintenanceBanner";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  const user_fullName = user.user_fullName;



  return (
    <>
      <MaintenanceBanner />
      <AdminShell user_fullName={user_fullName}>{children}</AdminShell>
    </>
  );
}
