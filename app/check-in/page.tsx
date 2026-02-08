import { prisma } from "@/prisma/client";
import CheckInTable from "./CheckInTable";

const CheckInHomePage = async () => {
  const checkInItems = await prisma.inventory.findMany({
    where: { inv_status: "Active" },
    include: { bin: {
      select: {
        bin_id: true,
        bin_name: true, 
      }
    }
      , location: {
        select: {
          loc_id: true,
          loc_name: true,
        }
      }, 
      store: {
        select: {
          store_id: true,
          store_name: true,
        }
      }},
  });

  return (
    <>
      <CheckInTable checkInItems={checkInItems} />
    </>
  )
}
export default CheckInHomePage;