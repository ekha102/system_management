
import { Grid, Box, Card, Heading, Flex, Text } from "@radix-ui/themes"
import { CubeIcon, ArchiveIcon, BackpackIcon } from "@radix-ui/react-icons"
import LatestAddProducts from "./LatestAddProducts"
import TotalProducts from "./TotalProducts"
import TotalStores from "./TotalStores"
import TotalBins from "./TotalBins"
import TotalLocations from "./TotalLocations"

const DashBoardPage = () => {
  return (
    <Box p="4">

      {/* 🔹 ROW 1 — SUMMARY CARDS */}
      <Grid  columns={{ initial: "1", sm: "2", lg: "4" }} gap="4" mb="6" width="100%">
        <TotalProducts />
        <TotalStores />
        <TotalBins/>
        <TotalLocations />
      </Grid>

      {/* 🔹 ROW 2 — LATEST INVENTORY */}
      <Card size="3">
        <Heading size="4" mb="4">
          Latest Inventory Entries
        </Heading>
        <LatestAddProducts />
      </Card>

    </Box>
  )
}
export default DashBoardPage;