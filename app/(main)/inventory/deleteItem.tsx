"use client";
import { Button, Spinner } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface Props {
  itemId: number;
};

const ButtonDeleteItem =  ({ itemId }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    await axios.delete('/api/inventory/' + itemId);
    // This refreshes the Server Component table
    router.refresh();
    setIsDeleting(false);
  }

  return (
    <Button disabled={isDeleting} color='red' size="1" onClick={handleDelete}>{isDeleting && <Spinner /> }Del</Button>
  )
}

export default ButtonDeleteItem