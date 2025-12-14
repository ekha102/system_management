

import React from 'react';
import { prisma } from '@/prisma/client';
import ItemDetails from './ItemDetails';


// import { CopyIcon } from "@radix-ui/react-icons";

interface Props {
  params: Promise<{ id: string }>;
}

const ItemDataDetail = async ({ params }: Props) => {
  const { id } = await params;

  const items = await prisma.inventory.findUnique({
    where: { inv_id: Number(id) },
  });

  // if (!items) Loading();

  return (
    <ItemDetails items={items} />
  )
    
    
};

export default ItemDataDetail;