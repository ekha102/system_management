

import { prisma } from '@/prisma/client'
import React from 'react'
import EditForm from './editForm';
import { notFound } from "next/navigation";



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
      product: true,
    },
  });






  const bins = await prisma.bin.findMany();
  const locations = await prisma.location.findMany();
  const stores = await prisma.store.findMany();
  const products = await prisma.product.findMany();

  if (!productItem) {
    notFound(); // 🔥 this triggers not-found.tsx
  }

  console.log("Display inventory: ", JSON.stringify(productItem, null, 2))




  return (
    <EditForm productItem={productItem} bins={bins} locations={locations} stores={stores} products={products}/>
  )
}

export default EditIventoryItem