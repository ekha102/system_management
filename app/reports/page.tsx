import { prisma } from "@/prisma/client"
import ReportView from "./ReportView"



const ReportHomePage = async () => {
  const reportDetail = await prisma.inventory.findMany({
    where: {
      inv_status: "Active"
    },
    include: {
      product: true,
      store: true,
    }
  });

  console.log(reportDetail)


  return (
    <>
      <ReportView reportDetail={reportDetail} />
    </>
  )
}
export default ReportHomePage