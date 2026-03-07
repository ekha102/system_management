import { prisma } from "@/prisma/client";
import { redirect } from "next/navigation";

export const getValidateUserRole = async (tokenUser) => {
   if (!tokenUser) {
    redirect("/login");
  }
  

  const currentUser = await prisma.user.findUnique({
  where: { user_id: tokenUser?.user_id },
  include: {
    role: {
      include: {
        permissions: {
          include: {
            permission: {
              include: {
                module: true,
                action: true
              }
            }
          }
        }
      }
    }
  }
})


  const permissions =
  currentUser?.role.permissions.map(
    (p) =>
      `${p.permission.module.module_name}.${p.permission.action.action_name}`
  ) || [];

  return permissions;
};