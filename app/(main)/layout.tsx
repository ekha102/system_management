import { getUserFromToken } from "@/lib/--auth";
import AdminShell from "./AdminShell";
import MaintenanceBanner from "./MaintenanceBanner";
import { auth } from "@/auth";


export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;
  const user_fullName = user.user_fullName;

  console.log(">> checking tokenUser", user_fullName)

  return (
    <>
      <MaintenanceBanner />
      <AdminShell user_fullName={user_fullName}>{children}</AdminShell>
    </>
  );
}
