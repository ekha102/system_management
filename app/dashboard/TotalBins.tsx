import { prisma } from "@/prisma/client"
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"




const TotalBins = async () => {
  const TotalBins = await prisma.bin.count();
  return (
    <Card size="3">
          <Flex justify="between" align="start">
            <Box>
              <Text size="2" color="gray">
                Bins
              </Text>
              <Heading size="6" mt="2" align="center">
                {TotalBins}
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
              <Text size="9">🗄️</Text>
            </Flex>
          </Flex>
        </Card>
  )
}
export default TotalBins