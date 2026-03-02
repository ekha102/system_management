'use client';
import { Button } from "@radix-ui/themes"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  storeId: number;
}


const DeleteStore = ({ storeId }: Props) => {

  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  // console.log("DeleteStore called with storeId:", storeId);
  const handleDelete = async (storeId: number) => {
    // console.log('Store Id', storeId);
    try {
      setIsDeleting(true);
      await axios.delete(`/api/stores/${storeId}`);
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      console.log(error);
    }
    

  }
  
  return (
    <Button color="red" size="1" onClick={()=>handleDelete(storeId)} disabled={isDeleting}>Del</Button>
  )
}
export default DeleteStore