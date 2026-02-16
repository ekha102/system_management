import { prisma } from "@/prisma/client"
import { Card, Flex, Box, Heading, Text } from "@radix-ui/themes"

const StatusLow = async () => {


  const items = await prisma.inventory.findMany({
    where: { inv_status: 'Active' }
  });

  const statusLow = items.filter(
    item => item.inv_quantity <= item.inv_trigger
  ).length;


  // console.log("statusLow", statusLow)


  return (
    <Card size="1">
      <Flex justify="center" align="start">
        <Box>
          <Text size="2" color="gray">
            🔴 Low
          </Text>
          <Heading size="6" mt="2" align="center">
            {statusLow}
          </Heading>
        </Box>
      </Flex>
    </Card>
  )
}
export default StatusLow