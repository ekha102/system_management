import { prisma } from "@/prisma/client"
import UserTableView from "./UserTableView";
import { getUserFromToken } from "@/lib/auth";
import { getValidateUserRole } from "@/lib/validateUserRole";




const UserPage = async () => {

  const tokenUser = getUserFromToken();


  const permissions = await getValidateUserRole(tokenUser);
  // console.log("Permission:", permissions)


  if (!permissions.includes("users.view")) {
    return (
      <div className="flex justify-center items-center font-bold h-screen text-red-600 text-xl">
        You do not have permission to access this page.
      </div>
    );
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