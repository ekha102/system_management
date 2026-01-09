import { ValidationLocationForm } from "@/app/_components/ValidationLocationForm";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {id: string};
}

// Edit location by ID
export const PUT = async (request: NextRequest, {params}: Props) => {
  // return NextResponse.json({message: "PUT method for location route"});
  const {id} = params;
  const body = await request.json();
  // console.log("Body:", body);
  const validation = ValidationLocationForm.safeParse(body);
  // console.log("Validation: ", validation);
  if (validation.error)
    return NextResponse.json({error: validation.error}, {status: 400});

  const { loc_name, loc_desc } = validation.data;
  // Check if location exists
  const checkingLocExist = await prisma.location?.findUnique({
    where: {loc_id: parseInt(id)}
  });
  // Checking if location exists
  if (!checkingLocExist)
    return NextResponse.json({error: "Location not found"}, {status: 404}); 

  const updatedLocation = await prisma.location.update({
    where: {loc_id: parseInt(id)},
    data: {
      loc_name,
      loc_desc
    }
  });

  return NextResponse.json(updatedLocation, {status: 200});
}


// Delete location by ID
export const DELETE = async (request:NextRequest, {params}: Props) => {
  const {id} = params
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