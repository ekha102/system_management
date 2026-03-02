"use client"
import { Button } from "@radix-ui/themes"
import Link from "next/link";
import { IoAddCircleOutline } from "react-icons/io5";

const ButtonCreateProduct = () => {
  return (
    <>
      <Button my="2" asChild>
        <Link href="/products/create" className="flex items-center gap-2">
          <IoAddCircleOutline className="text-lg" />
          <span>Create</span>
        </Link>
      </Button>
    </>
  )
}
export default ButtonCreateProduct