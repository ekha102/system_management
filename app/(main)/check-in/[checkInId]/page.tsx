import { prisma } from "@/prisma/client";
import CheckInFormItem from "./CheckInFormItem";



interface Props {
  params: { checkInId: string }
}


const CheckInForm = async ({ params }: Props) => {

  const { checkInId } = params;
  console.log("Check In ID:", checkInId);

  const checkInItemDetails = await prisma.inventory.findUnique({
    where: {
      inv_id: parseInt(checkInId),
    },
    include: {
      product: true,
      // inventorytransaction: true,
    },
    
  })

  // console.log("Check In Item Details:", checkInItemDetails);


  return (
    <>
      <CheckInFormItem checkInItemDetails={checkInItemDetails}/>
    </>
  )
}


export default CheckInForm