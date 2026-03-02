import { Button, Spinner } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


interface Props {
  locId: number;
}


const DeleteLocationButton = ({locId}: Props) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (locId: number) => {
    try {
      setIsDeleting(true);
      await axios.delete(`api/locations/${locId}`);
      router.refresh();
    } catch (error) {
      console.log(error);
      setIsDeleting(false);
    }
      
  }


  return (
    <Button size="1" color='red' onClick={()=>handleDelete(locId)} disabled={isDeleting}>{isDeleting ? <Spinner/> : "Del"}</Button>
  )
}

export default DeleteLocationButton