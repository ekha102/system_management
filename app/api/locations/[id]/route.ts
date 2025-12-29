import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {id: string};
}

export const DELETE = async (request:NextRequest, {params}: Props) => {
  const checkExistIdLoc = await prisma.location.findUnique({
    where: {loc_id: parseInt(params.id)}
  });
  // console.log("Check Exist ID Loc:", checkExistIdLoc);
  if (!checkExistIdLoc)
    return NextResponse.json({error: "Location not found"}, {status: 404});

  const deletedLocation = await prisma.location.delete({
    where: {loc_id: parseInt(params.id)}
  });

  return NextResponse.json(deletedLocation, {status: 200});
  
}