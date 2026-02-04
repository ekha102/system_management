import { ValidationStoreForm } from "@/app/_components/ValidationStoreForm";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export const DELETE = async (request: NextRequest, { params }: { params: { id: string } } ) => {
  const { id } = params;

  // Here you would add your logic to delete the store from your database
  console.log(`Deleting store with id in backend: ${id}`);

  const checkStoreExisting = await prisma.store.findUnique({
    where: {store_id: parseInt(id)}
  });

  if (!checkStoreExisting)
    return NextResponse.json({error: "Store not found"}, {status: 404});

  const deletedStore = await prisma.store.delete({
    where: {store_id: parseInt(id)}
  });
  return NextResponse.json(deletedStore, {status: 200});

}

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
  const body = await request.json();
  // console.log("DB id: ", id);
  // console.log("Request body: ", body);
  const validation = ValidationStoreForm.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({error: "Invalid store data"}, {status: 400});
  }
  

  const checkStoreExisting = await prisma.store.findUnique({
    where: {store_id: parseInt(id)}
  });
  if (!checkStoreExisting)
    return NextResponse.json({error: "Store not found"}, {status: 404});

  const { store_name, store_desc } = validation.data;
  const updatedStore = await prisma.store.update({
    where: {store_id: parseInt(id)},
    data: {
      store_name,
      store_desc
    }
  })
  return NextResponse.json(updatedStore, {status: 200});
} 