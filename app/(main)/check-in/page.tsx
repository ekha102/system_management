import { prisma } from "@/prisma/client";
import CheckInTable from "./CheckInTable";
import Pagination from "../../_components/Pagination";
import BasicSearch from "../../_components/BasicSearch";

import { getUserFromToken } from "@/lib/auth";
import { getValidateUserRole } from "@/lib/validateUserRole";

type Props = {
  searchParams: {
    page?: string;
    searchCheckInProduct?: string;
  }
}
const CheckInHomePage = async ({ searchParams }: Props) => {



  const tokenUser = getUserFromToken();
  
  
    const permissions = await getValidateUserRole(tokenUser);
    // console.log("Permission:", permissions)
  
  
    if (!permissions.includes("checkin.view")) {
      return (
        <div className="flex justify-center items-center font-bold h-screen text-red-600 text-xl">
          You do not have permission to access this page.
        </div>
      );
    }
  


  
  const currentPage = parseInt(searchParams.page || "1"); // Default to page 1 if not provided
  const sizePage = 5; // Number of items per page
  const searchParamProduct = searchParams.searchCheckInProduct ? { contains: searchParams.searchCheckInProduct } : undefined


  

  const checkInItems = await prisma.inventory.findMany({
    where: {
      inv_status: "Active", 
      product: {
        // Find the search for the product name
        prod_name: searchParamProduct
      },
    }, 
    include: {
      bin: {
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
      },
      product: {
        select: {
          prod_id: true,
          prod_name: true,
        }
      }
    },
    skip: (currentPage - 1) * sizePage,
    take: sizePage,
  });

  const checkInCount = await prisma.inventory.count({
    where: { inv_status: "Active", 
      product: {
        prod_name: searchParamProduct
      },
    },
  });

  return (
    <>
      {/* <SearchCheckInProduct /> */}
      <BasicSearch route="/check-in" queryKey="searchCheckInProduct" placeholder="Search check-in product..." />
      <CheckInTable checkInItems={checkInItems} />
      <Pagination itemCount={checkInCount} itemsSize={sizePage} currentPage={currentPage} />
    </>
  )
}
export default CheckInHomePage;