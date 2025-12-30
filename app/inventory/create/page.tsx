
import { prisma } from '@/prisma/client';
import FormInventory from './FormInventory';




const CreateItem = async () => {

 
  const bins = await prisma.bin.findMany();
  const locations = await prisma.location.findMany();


  return (
    <>
      <FormInventory bins={bins} locations={locations} />
    </>
  )
}

export default CreateItem;