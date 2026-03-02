"use client"
import { Box, Flex, Text, IconButton } from "@radix-ui/themes"
import { Cross2Icon } from "@radix-ui/react-icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  FaHome, FaBoxes, FaSignInAlt, FaSignOutAlt,
  FaArchive, FaMapMarkerAlt, FaStore, FaChartBar, FaTag
} from "react-icons/fa"
import { useEffect } from "react"

const links = [
  { label: "Dashboard", href: "/", icon: <FaHome /> },
  { label: "Inventory", href: "/inventory", icon: <FaBoxes /> },
  { label: "Check-In", href: "/check-in", icon: <FaSignInAlt /> },
  { label: "Check-Out", href: "/check-out", icon: <FaSignOutAlt /> },
  { label: "Products", href: "/products", icon: <FaTag /> },
  { label: "Bins", href: "/bins", icon: <FaArchive /> },
  { label: "Locations", href: "/locations", icon: <FaMapMarkerAlt /> },
  { label: "Stores", href: "/stores", icon: <FaStore /> },
  { label: "Reports", href: "/reports", icon: <FaChartBar /> },
]

const NavBar = ({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) => {
  const pathname = usePathname()
  useEffect(() => {
  setOpen(false)
}, [pathname])
  return (
    <>
      {/* Desktop Sidebar */}
      <Box
        display={{ initial: "none", md: "block" }}
        style={{
          width: 240,
          borderRight: "1px solid var(--gray-5)",
          padding: "16px",
          background: "var(--gray-1)",
        }}
      >
        <Text size="4" weight="bold" mb="5">Admin Panel</Text>
        <Flex direction="column" gap="2">
          {links.map(link => {
            const active = pathname === link.href
            return (
              <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                <Flex
                  align="center"
                  gap="3"
                  p="2"
                  style={{
                    borderRadius: 8,
                    background: active ? "var(--accent-3)" : "transparent",
                  }}
                >
                  {link.icon}
                  <Text>{link.label}</Text>
                </Flex>
              </Link>
            )
          })}
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      {open && (
        <Box
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 2000,
          }}
          onClick={() => setOpen(false)}
        >
          <Box
            onClick={e => e.stopPropagation()}
            style={{
              width: 240,
              height: "100%",
              background: "white",
              padding: 16,
            }}
          >
            <Flex justify="between" align="center" mb="4">
              <Text weight="bold">Menu</Text>
              <IconButton variant="ghost" onClick={() => setOpen(false)}>
                <Cross2Icon />
              </IconButton>
            </Flex>

            <Flex direction="column" gap="2">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ textDecoration: "none" }}
                >
                  <Flex align="center" gap="3" p="2">
                    {link.icon}
                    <Text>{link.label}</Text>
                  </Flex>
                </Link>
              ))}
            </Flex>
          </Box>
        </Box>
      )}
    </>
  )
}

export default NavBar
