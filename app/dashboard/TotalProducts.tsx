import { prisma } from "@/prisma/client";
import { Card, Flex, Text, Box, Heading } from "@radix-ui/themes"


const TotalProducts = async () => {
  const totalProducts = await prisma.inventory.count({
    where: { inv_status: "Active" }
  });
  console.log("total Products", totalProducts);
  return (
    <Box>
      <Card>
        <Flex gap="3" align="center">
          
          <Box>
            <Text as="div" size="2" weight="bold">
              Total Products
            </Text>
            <Heading align="center" size="4" color="gray">
              {totalProducts}
            </Heading>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
export default TotalProducts