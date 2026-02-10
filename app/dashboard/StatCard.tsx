import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { title } from "process"

const StatCard = () => {
  return (
    <Card size="3">
    <Flex justify="between" align="start">
      <Box>
        <Text size="2" color="gray">
          {title}
        </Text>
        <Heading size="6" mt="2">
          {value}
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
        {icon}
      </Flex>
    </Flex>
  </Card>
  )
}
export default StatCard