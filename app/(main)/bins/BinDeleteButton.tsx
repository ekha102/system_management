"use client";
import { Button } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Props {
  binIdDelete: number
}


const BinDeleteButton = ({binIdDelete}: Props) => {
  // console.log("Bin Id: ", binIdDelete);
  const router = useRouter();


  const handleDelete = async (binIdDelete: number) => {
    // console.log("Bin Id: ", binIdDelete);
    try {
      await axios.delete(`/api/bins/${binIdDelete}`);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
    

  }


  return (
    <Button size="1" color="red" onClick={()=>handleDelete(binIdDelete)}>Del</Button>
  )
}

export default BinDeleteButton;