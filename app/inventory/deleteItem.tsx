"use client";
import { Button } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Inventory } from '../generated/prisma';

interface Props {
  itemId?: Inventory;
};

const ButtonDeleteItem =  ({itemId}: Props) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter();
  // console.log("passed in delete", typeof itemId);


  const handleDelete = async (itemId:number) => {
    setIsDeleting(true);
    await axios.delete('/api/inventory/' + itemId);
    // This refreshes the Server Component table
    router.refresh();
    setIsDeleting(false);
  }

  return (
    <Button disabled={isDeleting} color='red' size="1" onClick={()=>handleDelete(itemId)}>Del</Button>
  )
}

export default ButtonDeleteItem