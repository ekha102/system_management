
import { prisma } from "@/prisma/client";
import CheckOutTable from "./CheckOutTable";

const CheckOutHomePage = async () => {
  const checkOutList = await prisma.inventory.findMany({
    include: {
      product: {
        select: {
          prod_name: true,
        }
      },
      bin: {
        select: {
          bin_name: true,
        }
      },
      location: {
        select: {
          loc_name: true,
        }
      },
      store: {
        select: {
          store_name: true,
        }
      }
    }
  });
  // console.log("Check Out List:", checkOutList);


  return (
    <>
      <CheckOutTable checkOutList={checkOutList} />
    </>
  )
}
export default CheckOutHomePage;