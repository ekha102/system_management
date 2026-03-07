import { Heading } from "@radix-ui/themes"
import UserForm from "./UserForm"
import { prisma } from "@/prisma/client"



interface Props {
  params: {
    userId: string
  }
}

const EditPage = async ({ params }: Props) => {

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
    <>
      <Heading>User Edit</Heading>
      <UserForm userDetail={userDetail} roleList={roleList} moduleList={moduleList}/>
    </>
  )
}
export default EditPage