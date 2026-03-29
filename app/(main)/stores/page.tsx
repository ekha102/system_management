import { prisma } from '@/prisma/client';
import DisplayStoreTable from './DisplayStoreTable'
import CreateStore from './CreateStore';
import Breadcrumb from '@/app/_components/Breadcrumb';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getValidateUserRole } from "@/lib/validateUserRole";





const storePage = async () => {
  // Define for breadcrumb:
  const breadcrumbList = [
    { label: "Stores", href: "/stores" },
  ]

  const session = await auth();
  const user_id = session?.user?.user_id;
  console.log("user_id", user_id)


  if (!user_id) {
    redirect("/login");
  }




  const permissions = await getValidateUserRole(user_id);


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
      <DisplayStoreTable storesList={storesList} canEditStore={canEditStore} canDelStore={canDelStore} />
    </div>
  )
}

export default storePage;
