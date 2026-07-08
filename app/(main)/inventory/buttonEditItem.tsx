"use client";
import { Button } from '@radix-ui/themes';
import Link from 'next/link';


interface Props {
  itemId: number
}

const ButtonEditItem = ({ itemId }: Props) => {


  return (
    <Button size="1"><Link href={`/inventory/edit/${itemId}`}>Edit</Link></Button>
  )
}

export default ButtonEditItem;