import { prisma } from "@/prisma/client"
import { getUserFromToken } from "@/lib/auth/getUserFromToken";
import { getValidateUserRole } from "@/lib/validateUserRole";
import Breadcrumb from "@/app/_components/Breadcrumb";
import UserTableView from "./UserTableView";




const UserPage = async () => {
  // Define Breadcrumb:
  const breadcrumbList = [
    {label: 'Users', href:'/users'}
  ]

  const tokenUser = await getUserFromToken();


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
    <div className="space-y-4">
      <Breadcrumb items={breadcrumbList} />
      <UserTableView
        userList={userList} />
    </div>
  )
}
export default UserPage;
