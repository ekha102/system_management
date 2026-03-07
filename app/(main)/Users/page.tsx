import { prisma } from "@/prisma/client"
import UserTableView from "./UserTableView";
import { authorize } from "@/lib/authorize";
import { getUserFromToken } from "@/lib/auth";
import { getValidateUserRole } from "@/lib/validateUserRole";
import { redirect } from "next/navigation";



const UserPage = async () => {


  const tokenUser = getUserFromToken();


  const permissions = await getValidateUserRole(tokenUser);
  console.log("Permission:", permissions)


  if (!permissions.includes("User.View")) {
    redirect("/dashboard");

  }


  const userList = await prisma.user.findMany({
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
  });

  // console.log("user List", userList)


  return (
    <>
      <UserTableView
        userList={userList} />
    </>
  )
}
export default UserPage;