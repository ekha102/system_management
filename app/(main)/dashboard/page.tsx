
import { Grid, Box, Card, Heading} from "@radix-ui/themes"
import LatestAddProducts from "./LatestAddProducts"
import TotalProducts from "./TotalProducts"
import TotalStores from "./TotalStores"
import TotalBins from "./TotalBins"
import TotalLocations from "./TotalLocations"
import StatusLow from "./StatusLow"
import StatusNormal from "./StatusNormal"
import StatusHigh from "./StatusHigh"
import Breadcrumb from "@/app/_components/Breadcrumb"

const DashBoardPage = () => {
  const breadcrumbList = [
    { label: "Dashboard", href: "/dashboard" },
  ];


  return (

    <div className="space-y-4">
      <Breadcrumb items={breadcrumbList} />
      <Box p="4">

        {/* 🔹 ROW 1 — SUMMARY CARDS */}
        <Grid columns={{ initial: "1", sm: "2", lg: "4" }} gap="4" mb="6" width="100%">
          <TotalProducts />
          <TotalStores />
          <TotalBins />
          <TotalLocations />
        </Grid>

        {/* Row 2 Status */}
        <Grid columns={{ initial: "2", sm: "4", lg: "8" }} gap="4" mb="6" width="100%">
          <StatusLow />
          <StatusNormal />
          <StatusHigh />
        </Grid>

        {/* 🔹 ROW 2 — LATEST INVENTORY */}
        <Card size="3">
          <Heading size="4" mb="4">
            Latest Inventory Entries
          </Heading>
          <LatestAddProducts />
        </Card>

      </Box>
    </div>


  )
}
export default DashBoardPage;