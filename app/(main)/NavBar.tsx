"use client"
import { Box, Flex, Text, IconButton } from "@radix-ui/themes"
import { Cross2Icon } from "@radix-ui/react-icons"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  FaHome, FaBoxes, FaSignInAlt, FaSignOutAlt,
  FaArchive, FaMapMarkerAlt, FaStore, FaChartBar, FaTag,
  FaUsers
} from "react-icons/fa"
import { useEffect } from "react"
import axios from "axios"
import DisplayName from "./DisplayName"


const links = [
  // the dashboard route lives under (main)/dashboard, so its actual path is `/dashboard`.
  // the previous `/` link triggered the root redirect (which sends users to /login),
  // causing a full page reload. point to the correct route instead.
  { label: "Dashboard", href: "/dashboard", icon: <FaHome /> },
  { label: "Inventory", href: "/inventory", icon: <FaBoxes /> },
  { label: "Check-In", href: "/check-in", icon: <FaSignInAlt /> },
  { label: "Check-Out", href: "/check-out", icon: <FaSignOutAlt /> },
  { label: "Products", href: "/products", icon: <FaTag /> },
  { label: "Bins", href: "/bins", icon: <FaArchive /> },
  { label: "Locations", href: "/locations", icon: <FaMapMarkerAlt /> },
  { label: "Stores", href: "/stores", icon: <FaStore /> },
  { label: "Reports", href: "/reports", icon: <FaChartBar /> },
  { label: "Users", href: "/users", icon: <FaUsers /> },
]

const NavBar = ({ open, setOpen, tokenUser }: { open: boolean; setOpen: (v: boolean) => void, tokenUser:[] }) => {
 
  const pathname = usePathname()
  const router = useRouter()


  useEffect(() => {
    setOpen(false)
  }, [pathname])

  
  const handleLogout = async () => {
    console.log("Logout");
    try {
      await axios.post("/api/auth/logout", {}, // no body needed
      {
        withCredentials: true, // important if using cookies
      })
      // console.log("", response)

      router.replace("/login") // better than push for logout
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }




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
          height: "100vh",
        }}
      >
        <Flex direction="column" justify="between" style={{ height: "100%" }}>

          {/* TOP SECTION */}
          <Box>
            <Text size="4" weight="bold" mb="5">{tokenUser.user_fullName}</Text>
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

          {/* BOTTOM LOGOUT */}
          <Flex
            align="center"
            gap="3"
            p="2"
            onClick={handleLogout}
            style={{
              borderRadius: 8,
              cursor: "pointer"
            }}
          >
            <FaSignOutAlt />
            <Text>Logout</Text>
          </Flex>

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
            {/* Mobile Logout */}
            <Flex
              align="center"
              gap="3"
              p="2"
              onClick={handleLogout}
              style={{
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              <FaSignOutAlt />
              <Text>Logout</Text>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  )
}

export default NavBar
