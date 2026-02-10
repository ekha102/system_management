import { prisma } from "@/prisma/client"
import { Card, Flex, Box, Heading, Text } from "@radix-ui/themes"

const TotalStores = async () => {
  const totalStores = await prisma.store.count();


  return (
    <Card size="3">
          <Flex justify="between" align="start">
            <Box>
              <Text size="2" color="gray">
                Stores
              </Text>
              <Heading size="6" mt="2" align="center">
                {totalStores}
              </Heading>
            </Box>

            <Flex
              align="center"
              justify="center"
              style={{
                background: "var(--gray-3)",
                borderRadius: 12,
                padding: 10,
              }}
            >
              <Text size="9">🏪</Text>
            </Flex>
          </Flex>
        </Card>
  )
}
export default TotalStores