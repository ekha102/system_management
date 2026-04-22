"use client";

import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

interface Props{
  itemId: number,
}

const ButtonCheckOut = ({ itemId }: Props) => {
  // console.log("Testing Check Out Item here", itemId);
  const router = useRouter();

  const handleCheckOut = (itemId: number) => {
    // console.log("Testing Check Out Item here", itemId);
    router.push(`/check-out/${itemId}`);
    // Implement the logic to handle the check-out process, such as updating the inventory status in the database or redirecting to a check-out page.
  }
  return (
    <Button onClick={() => handleCheckOut(itemId)}>Check Out</Button>
  )
}
export default ButtonCheckOut