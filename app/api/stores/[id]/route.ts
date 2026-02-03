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