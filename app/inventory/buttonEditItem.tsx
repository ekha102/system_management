"use client";
import { Button } from '@radix-ui/themes';
import React from 'react'
import { Inventory } from '../generated/prisma';
import { useRouter } from 'next/navigation';


interface Props {
  itemId?: Inventory
}

const ButtonEditItem = ({itemId}:Props) => {
  
  const router = useRouter();

  const handleEditItem = (itemId:Inventory) => {
    // console.log("FontEnd Id:", itemId);
    router.push('/inventory/edit/' + itemId);
  }

  return (
    <Button size="1" color="blue" onClick={()=>handleEditItem(itemId)}>Edit</Button>
  )
}

export default ButtonEditItem;