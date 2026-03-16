import { prisma } from '@/prisma/client';
import DisplayStoreTable from './DisplayStoreTable'
import CreateStore from './CreateStore';
import { Heading } from '@radix-ui/themes';
import { getUserFromToken } from "@/lib/auth";
import { getValidateUserRole } from "@/lib/validateUserRole";
import Breadcrumb from '@/app/_components/Breadcrumb';






const storePage = async () => {
  // Define for breadcrumb:
  const breadcrumbList = [
    { label: "Stores", href: "/stores" },
  ]

  const tokenUser = getUserFromToken();


  const permissions = await getValidateUserRole(tokenUser);
  // console.log("Permission:", permissions)


  if (!permissions.includes("stores.view")) {
    return (
      <div className="flex justify-center items-center font-bold h-screen text-red-600 text-xl">
        You do not have permission to access this page.
      </div>
    );
  }


  const canCreateStore = permissions.includes("stores.create");
  const canEditStore = permissions.includes("stores.edit");
  const canDelStore = permissions.includes("stores.delete");



  const storesList = await prisma.store.findMany();


  return (
    <div className='space-y-4'>
      <Breadcrumb items={breadcrumbList} />
      <div className="my-4">
        {canCreateStore && <CreateStore />}

      </div>
      <DisplayStoreTable storesList={storesList} canEditStore={canEditStore} canDelStore={canDelStore}/>
    </div>
  )
}

export default storePage;