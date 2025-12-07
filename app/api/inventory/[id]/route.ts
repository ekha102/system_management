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