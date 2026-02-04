
import { prisma } from '@/prisma/client';
import FormInventory from './FormInventory';





const CreateItem = async () => {

 
  const bins = await prisma.bin.findMany();
  const locations = await prisma.location.findMany();
  const stores = await prisma.store.findMany();


  return (
    <>
      <FormInventory bins={bins} locations={locations} stores={stores} />
    </>
  )
}

export default CreateItem;