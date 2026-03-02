import { Flex, Grid, Text } from "@radix-ui/themes"

const Footer = () => {
  return (


    <Flex direction="column">
      <Text color="gray" align="center">
        © {new Date().getFullYear()} Inventory System
      </Text>

    </Flex>


    //     <Grid
    //   columns={{ initial: "1", sm: "3", md: "3", lg: "3" }}
    //   gap="2"
    //   align="center"
    // >
    //   <Text color="gray" align={{ initial: "center", md: "left" }}>
    //     © {new Date().getFullYear()} Inventory System
    //   </Text>

    //   <Text color="gray" align="center">
    //     Power by TTW
    //   </Text>

    //   <Text color="gray" align={{ initial: "center", md: "right" }}>
    //     (Tomorrow Technology Web)
    //   </Text>
    // </Grid>
  )
}
export default Footer
