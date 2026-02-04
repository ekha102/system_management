

import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation';
import React from 'react'
import EditForm from './editForm';


interface Props {
  params: { id: string }
}


const EditIventoryItem = async ({ params }: Props) => {
  // console.log("Get Id:", params.id);
  const { id } = params;


  const productItem = await prisma.inventory.findUnique({
    where: {
      inv_id: parseInt(id),
    },
    include: {
      bin: true,
      location: true,
      store: true,
    },
  });




  if (!productItem) notFound();

  const bins = await prisma.bin.findMany();
  const locations = await prisma.location.findMany();
  const stores = await prisma.store.findMany();




  return (
    <EditForm productItem={productItem} bins={bins} locations={locations} stores={stores} />
  )
}

export default EditIventoryItem