import { ValidationInventoryCreateItem } from "@/app/_components/invalidationInventoryCreate";
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


export async function PUT(request: NextRequest, {params}: Props ) {
  const body = await request.json();
  console.log("Body:", body);
  const validate = ValidationInventoryCreateItem.safeParse(body);
  if (validate.error)
    return NextResponse.json(validate.error.errors, { status: 400 });

  const checkItemExist = await prisma.inventory.findUnique({
    where: {id: parseInt(params.id)}
  })  
  if  (!checkItemExist) 
    return NextResponse.json({error: "Item not found"}, {status: 404}); 

  const {name, description, quantity} = validate.data;
  const updateItem = await prisma.inventory.update({
    where: {id: parseInt(params.id)},
    data: { 
      name,
      description: body.description,
      quantity: body.quantity,
    }
  })  
  return NextResponse.json(body, { status: 200 });
}