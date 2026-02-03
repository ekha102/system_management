import { ValidationStoreForm } from "@/app/_components/ValidationStoreForm";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest, response: NextResponse) => {
  const body = await request.json();
  // console.log("Store in backend", body);
  const valadation = ValidationStoreForm.safeParse(body);
  if (!valadation.success) {
    return NextResponse.json({ message: "Validation failed", errors: valadation.error.format() }, { status: 400 });
  }

  const { store_name, store_desc } = valadation.data;

  // Here you would typically interact with your database to create the store
  // For demonstration, we'll just return the validated data  
  const createdStore = await prisma.store.create({
    data: {
      store_name,
      store_desc
    }
  })
  return NextResponse.json(createdStore, { status: 201 });
  
}