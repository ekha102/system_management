import { prisma } from "@/prisma/client";

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
  })

  console.log("Check In Item Details:", checkInItemDetails);


  return (
    <>Check In Form</>
  )
}


export default CheckInForm