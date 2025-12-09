import { prisma } from '@/prisma/client'
import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
  params: {id: string}
}


const EditIventoryItem = async ({params}: Props) => {
  // console.log("Get Id:", params.id);
  const { id } = await params; 

  const productItem = await prisma.inventory.findUnique({
    where: {id: parseInt(id)}
  })

  if (!productItem) notFound();


  return (
    <div>Edit Item</div>
  )
}

export default EditIventoryItem