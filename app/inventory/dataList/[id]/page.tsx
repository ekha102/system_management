

import React from 'react';
import { prisma } from '@/prisma/client';
import { Item } from '@radix-ui/themes/components/checkbox-group.primitive';
import ItemDetails from './ItemDetails';


// import { CopyIcon } from "@radix-ui/react-icons";

interface Props {
  params: Promise<{ id: string }>;
}

const ItemDataDetail = async ({ params }: Props) => {
  const { id } = await params;

  const items = await prisma.inventory.findUnique({
    where: { id: Number(id) },
  });
  // console.log("Item Detail:", items);

  return (
    <ItemDetails items={items} />
  )
    
    
};

export default ItemDataDetail;