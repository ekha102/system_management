import { prisma } from "@/prisma/client";
import CheckOutForm from "./checkOutForm";



interface Props {
  params: { checkOutId: string }
}


const PageFormCheckOut = async ({params}: Props) => {
  const { checkOutId } = params;
  console.log("Check Out ID", checkOutId);

  const checkOutDetail = await prisma.inventory.findUnique({
    where: {inv_id: parseInt(checkOutId)},
    include: {
      product: true,
    }
  })

  return (
    <>
      <CheckOutForm checkOutDetail={checkOutDetail} />
    </>
  )
}
export default PageFormCheckOut