// "use client"
import { Inventory } from '@/app/generated/prisma';
import { prisma } from '@/prisma/client'
import { Box, Button, Flex, Heading, TextField } from '@radix-ui/themes';

import { notFound } from 'next/navigation';
import React from 'react'
import EditForm from './editForm';


interface Props {
  params: { id: string }
}


const EditIventoryItem = async ({ params }: Props) => {
  // console.log("Get Id:", params.id);
  const { id } = await params;

  const productItem = await prisma.inventory.findUnique({
    where: { id: parseInt(id) }
  })

  if (!productItem) notFound();

  

  return (
    <EditForm productItem={productItem} />
  )
}

export default EditIventoryItem