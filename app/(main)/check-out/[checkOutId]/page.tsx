import { prisma } from "@/prisma/client";
import CheckOutForm from "./CheckOutForm";



interface Props {
  params: { checkOutId: string }
}


const PageFormCheckOut = async ({params}: Props) => {
  const { checkOutId } = await params;
  // console.log("Check Out ID", checkOutId);

  const checkOutDetail = await prisma.inventory.findUnique({
    where: {inv_id: parseInt(checkOutId)},
    include: {
      product: true,
    }
  })

  // console.log("Check-out detail: ", checkOutDetail);

  return (
    <>
      <CheckOutForm checkOutDetail={checkOutDetail} />
    </>
  )
}
export default PageFormCheckOut