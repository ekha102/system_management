import { Heading } from "@radix-ui/themes"
import UserForm from "./EditUserForm"
import { prisma } from "@/prisma/client"
import Breadcrumb from "@/app/_components/Breadcrumb"



interface Props {
  params: {
    userId: string
  }
}

const EditPage = async ({ params }: Props) => {
  // Define Breadcrumb 
  const breadcrumbList = [
    {label: 'Users', href:'/users'},
    {label: 'Edit'}
  ];

  const { userId } = params;

  const userDetail = await prisma.user.findUnique({
    where: {
      user_id: parseInt(userId)
    },
    select: {
      user_id: true,
      user_username: true,
      user_fullName: true,
      role: {
        select: {
          role_id: true,
          role_name: true,
          permissions: {
            select: {
              permissionId: true,
              permission: {
                select: {
                  module: true,
                  action: true,
                }
              }
            }
          }
        }
      }
    }
  })

  const roleList = await prisma.role.findMany();
  const moduleList = await prisma.module.findMany()
  // console.log("Role List", roleList);

  // console.log("User Detail: ", userDetail)


  return (
    <div className="space-y-4">
      <Breadcrumb items={breadcrumbList} />
      <UserForm userDetail={userDetail} roleList={roleList} moduleList={moduleList}/>
    </div>
  )
}
export default EditPage