import { Box, Flex, Heading, Separator } from "@radix-ui/themes";
import TotalProducts from "./TotalProducts"
import LatestAddProducts from "./LatestAddProducts";

const DashboardPage = () => {
  return (
    <>
      <Heading size="5">Dashboard</Heading>

      <Flex direction="row" gap="4" my="4">
        <TotalProducts />
        {/* Total low in stock*/}
        🔴 Low

        🟡 Normal

        🟢 High
      </Flex>

      <Separator orientation="horizontal" size="3" style={{ width: "100%" }} />

      <Flex direction="column">
        <Heading as="h3" size="4" my="1">Latest Added Products</Heading>
        <LatestAddProducts />
      </Flex>



    </>
  )
}
export default DashboardPage;