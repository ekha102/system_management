"use client"

import { useState } from "react"
import { Flex, Box, IconButton, Text } from "@radix-ui/themes"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import NavBar from "./NavBar"
import Footer from "./Footer"

const AdminShell = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)

  return (
    <Flex style={{ height: "100vh", overflow: "hidden" }}>

      {/* Sidebar */}
      <NavBar open={open} setOpen={setOpen} />

      {/* Main Area */}
      <Flex direction="column" style={{ flex: 1, overflow: "hidden" }}>

        {/* Mobile Header */}
        <Flex
          display={{ initial: "flex", md: "none" }}
          align="center"
          gap="3"
          p="3"
          style={{ borderBottom: "1px solid var(--gray-5)" }}
        >
          <IconButton variant="ghost" onClick={() => setOpen(true)}>
            <HamburgerMenuIcon />
          </IconButton>
          
        </Flex>

        {/* Scrollable Page Content */}
        <Box p="6" style={{ flex: 1, overflowY: "auto" }}>
          {children}
        </Box>

        <Footer />
      </Flex>
    </Flex>
  )
}

export default AdminShell;
