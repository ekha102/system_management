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




// Put for delete item 
export async function DELETE(request:NextRequest, {params}: Props) {
  const checkItemExist = await prisma.inventory.findUnique({
    where: {inv_id: parseInt(params.id)}
  })
  if  (!checkItemExist) 
    return NextResponse.json({error: "Item not found"}, {status: 404});
  
  const statusItem = await prisma.inventory.update({
    where: {inv_id: parseInt(params.id)},
    data: {inv_status: "Inactive"}
  })
  return NextResponse.json(statusItem, {status: 200});
}


export async function PUT(request: NextRequest, {params}: Props ) {
  const body = await request.json();
  // console.log("Put Body:", body);
  const validate = ValidationInventoryCreateItem.safeParse(body);
  if (validate.error)
    return NextResponse.json(validate.error.errors, { status: 400 });

  const checkItemExist = await prisma.inventory.findUnique({
    where: {inv_id: parseInt(params.id)}
  })  
  if  (!checkItemExist) 
    return NextResponse.json({error: "Item not found"}, {status: 404}); 


  const {inv_name, inv_desc, inv_quantity, inv_trigger, checkedBin, bin_id, loc_id} = validate.data;
  console.log("Validated Data:", validate.data);
  
 
  const finalBinId = checkedBin ? bin_id : null;
  const finalLocId = checkedBin ? null : loc_id;

  const updateItem = await prisma.inventory.update({
    where: {inv_id: parseInt(params.id)},
    data: { 
      inv_name,
      inv_desc,
      inv_quantity,
      inv_trigger,
      checkedBin,
      bin_id: finalBinId,
      loc_id: finalLocId
    }
  })  

  return NextResponse.json(updateItem, { status: 200 });
}