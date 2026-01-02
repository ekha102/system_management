import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {id: string};
}

export const PUT = async (request: NextRequest, {params}: Props) => {
  const {id} = await params
  const body = await request.json();
  const {bin_desc} = body;
  const checkingIdBinExist = await prisma.bin.findUnique({
    where: {bin_id: parseInt(id)}
  })
  // console.log("checking Id Bin Exist", checkingIdBinExist);
  if (!checkingIdBinExist)
    return NextResponse.json({error: "Bin not Found"}, {status: 404});

  const binUpdated = await prisma.bin.update({
    where: {bin_id: parseInt(id)},
    data: {
      bin_desc,
    }
  });

  return NextResponse.json(binUpdated, {status: 200});

}

export const DELETE = async (request: NextRequest, {params}: Props) => {
  // return NextResponse.json("Bin ID")
  const {id} = params;
  const checkingBinIdExist = await prisma.bin.findUnique({
    where: {bin_id: parseInt(id)}
  })
  
  if (!checkingBinIdExist) 
    return NextResponse.json({error: "Bin not found"}, {status: 404})

  const binDeleted = await prisma.bin.delete({
    where: {bin_id: parseInt(id)}
  });

  return NextResponse.json(binDeleted, {status:201});
  
}