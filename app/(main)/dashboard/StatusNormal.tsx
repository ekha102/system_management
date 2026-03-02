import { prisma } from "@/prisma/client";
import { Card, Flex, Box, Heading, Text } from "@radix-ui/themes";

const StatusNormal = async () => {

  const items = await prisma.inventory.findMany({
      where: { inv_status: 'Active' }
    });
  
    const statusNormal = items.filter(
      item => item.inv_quantity >= (item.inv_trigger)
    ).length;


  return (
    <Card size="1">
      <Flex justify="center" align="start">
        <Box>
          <Text size="2" color="gray">
            🟡 Normal
          </Text>
          <Heading size="6" mt="2" align="center">
            {statusNormal}
          </Heading>
        </Box>
      </Flex>
    </Card>
  )
}
export default StatusNormal