
import { prisma } from '@/prisma/client';
import FormInventory from './FormInventory';




const CreateItem = async () => {

 
  const bins = await prisma.bin.findMany();


  return (
    <>
      <FormInventory bins={bins} />
    </>
  )
}

export default CreateItem;