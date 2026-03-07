import { prisma } from '@/prisma/client';
import DisplayStoreTable from './DisplayStoreTable'
import CreateStore from './CreateStore';
import { Heading } from '@radix-ui/themes';
import { getUserFromToken } from '@/lib/auth';
import { getValidateUserRole } from '@/lib/validateUserRole';
import { redirect } from 'next/navigation';




const storePage = async () => {
  const tokenUser = getUserFromToken();

  const permissions = await getValidateUserRole(tokenUser);

  if (!permissions.includes("store.view")) {
    redirect("/dashboard");
    // <div>No permission to access</div>
  }

  const canCreateStore = permissions.includes("store.create");
  const canEditStore = permissions.includes("store.edit");
  const canDelStore = permissions.includes("store.delete");



  const storesList = await prisma.store.findMany();


  return (
    <>
      <Heading as="h1">Stores:</Heading>
      <div className="my-4">
        {canCreateStore && <CreateStore />}

      </div>
      <DisplayStoreTable storesList={storesList} canEditStore={canEditStore} canDelStore={canDelStore}/>
    </>
  )
}

export default storePage;