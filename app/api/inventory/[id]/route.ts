import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


interface Props {
  params: {id: string};
}

export async function GET(request:NextRequest, {params}:Props) {
  const checkItemExist = await prisma.inventory.findUnique({
    where: {id: parseInt(params.id)}
  })

  if  (!checkItemExist) {
    return NextResponse.json({error: "Item not found"}, {status: 404});
  }

  return NextResponse.json(checkItemExist);
}

export async function DELETE(request:NextRequest, {params}: Props) {
  const checkItemExist = await prisma.inventory.findUnique({
    where: {id: parseInt(params.id)}
  })
  if  (!checkItemExist) 
    return NextResponse.json({error: "Item not found"}, {status: 404});
  
  const deleteItem = await prisma.inventory.delete({
    where: {id: parseInt(params.id)}
  })
  return NextResponse.json(deleteItem, {status: 200});
}
