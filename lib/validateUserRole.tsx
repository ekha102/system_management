import { prisma } from "@/prisma/client";
import { redirect } from "next/navigation"


export const getValidateUserRole = async (user_id: any) => {
   if (!user_id) {
    redirect("/login");
  }
  console.log("Inside getVal", user_id)
  

  const currentUser = await prisma.user.findUnique({
  where: { user_id: parseInt(user_id)},
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