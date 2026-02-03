import { ValidationLocationForm } from "@/app/_components/ValidationLocationForm";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
  // return NextResponse.json({ message: "Location created" }, { status: 201 });
  const body = await request.json();
  // console.log("Body: ", body);
  const validate = ValidationLocationForm.safeParse(body);
  // console.log("Validation: ", validate);
  if (validate.error)
    return NextResponse.json({ message: "Validation failed", errors: validate.error.format() }, { status: 400 });

  // If validation passes, proceed to create location in the database using Prisma
  const { loc_name, loc_desc } = validate.data;
  const createdLocation = await prisma.location.create({
    data: {
      loc_name,
      loc_desc
    }
  });
  return NextResponse.json(createdLocation, { status: 201 });
}