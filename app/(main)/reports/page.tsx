import { prisma } from "@/prisma/client"
import ReportView from "./ReportView"
import Breadcrumb from "@/app/_components/Breadcrumb";



const ReportHomePage = async () => {
  // Define Breadcrumb: 
  const breadcrumbList = [
    {label: 'Reports', href: '/reports'}
  ]

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
    <div className="space-y-4">
      <Breadcrumb items={breadcrumbList}/>
      <ReportView reportDetail={reportDetail} />
    </div>
  )
}
export default ReportHomePage