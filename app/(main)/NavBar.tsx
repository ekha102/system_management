"use client"

import { Box, Flex, Text, IconButton } from "@radix-ui/themes"
import { Cross2Icon, ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  FaHome,
  FaBoxes,
  FaSignInAlt,
  FaSignOutAlt,
  FaArchive,
  FaMapMarkerAlt,
  FaStore,
  FaChartBar,
  FaTag,
  FaUsers
} from "react-icons/fa"
import { signOut } from "next-auth/react";

import { useEffect, useState } from "react"



const links = [
  { label: "Dashboard", href: "/dashboard", icon: <FaHome /> },
  { label: "Inventory", href: "/inventory", icon: <FaBoxes /> },
  { label: "Check-In", href: "/check-in", icon: <FaSignInAlt /> },
  { label: "Check-Out", href: "/check-out", icon: <FaSignOutAlt /> },
  { label: "Products", href: "/products", icon: <FaTag /> },
  { label: "Bins", href: "/bins", icon: <FaArchive /> },
  { label: "Locations", href: "/locations", icon: <FaMapMarkerAlt /> },
  { label: "Stores", href: "/stores", icon: <FaStore /> },
  { label: "Reports", href: "/reports", icon: <FaChartBar /> },

  {
    label: "Users",
    icon: <FaUsers />,
    children: [
      { label: "Users List", href: "/users/usersList" },
      { label: "Role", href: "/users/roles" },
      { label: "Permission", href: "/users/permissions" }
    ]
  }
]


const NavBar = ({
  open,
  setOpen,
  user_fullName
}: {
  open: boolean
  setOpen: (v: boolean) => void
  user_fullName: string
}) => {
  console.log("User name", user_fullName)

  const pathname = usePathname()
  const router = useRouter()

  const [openMenu, setOpenMenu] = useState<string | null>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])


  const handleLogout = async () => {
  await signOut({
    redirect: false, // prevent auto redirect (optional)
  });

  // manual redirect (like your old behavior)
  router.replace("/login");
};


  const renderLinks = () => {

    return links.map((link: any) => {

      // USERS WITH CHILDREN
      if (link.children) {

        const isOpen = openMenu === link.label

        return (
          <Box
            key={link.label}
            style={{ position: "relative" }}
            onMouseEnter={() => setOpenMenu(link.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >

            <Flex
              align="center"
              // justify="between"
              p="2"
              style={{
                borderRadius: 8,
                cursor: "pointer"
              }}
            >

              <Flex align="center" gap="3">
                {link.icon}
                <Text>{link.label}</Text>
              </Flex>

              <ChevronRightIcon />

            </Flex>


            {isOpen && (

              <Box
                style={{
                  position: "absolute",
                  top: 0,
                  left: "100%",
                  background: "white",
                  border: "1px solid var(--gray-5)",
                  borderRadius: 8,
                  padding: 8,
                  minWidth: 160,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                }}
              >

                <Flex direction="column" gap="1">

                  {link.children.map((child: any) => {

                    const active = pathname === child.href

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{ textDecoration: "none" }}
                      >

                        <Flex
                          p="2"
                          style={{
                            borderRadius: 6,
                            background: active
                              ? "var(--accent-3)"
                              : "transparent"
                          }}
                        >

                          <Text size="2">{child.label}</Text>

                        </Flex>

                      </Link>
                    )
                  })}

                </Flex>

              </Box>

            )}

          </Box>
        )
      }



      // NORMAL LINK
      const active = pathname === link.href

      return (
        <Link
          key={link.href}
          href={link.href}
          style={{ textDecoration: "none" }}
        >

          <Flex
            align="center"
            gap="3"
            p="2"
            style={{
              borderRadius: 8,
              background: active
                ? "var(--accent-3)"
                : "transparent"
            }}
          >

            {link.icon}
            <Text>{link.label}</Text>

          </Flex>

        </Link>
      )
    })
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
          height: "100vh"
        }}
      >

        <Flex direction="column" justify="between" style={{ height: "100%" }}>

          <Box>

            <Text size="4" weight="bold" mb="5">
              {user_fullName}
            </Text>

            <Flex direction="column" gap="2">

              {renderLinks()}

            </Flex>

          </Box>


          <Flex align="center" gap="3" p="2" onClick={handleLogout}
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
            zIndex: 2000
          }}
          onClick={() => setOpen(false)}
        >

          <Box
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 240,
              height: "100%",
              background: "white",
              padding: 16
            }}
          >

            <Flex justify="between" align="center" mb="4">

              <Text weight="bold">Menu</Text>

              <IconButton
                variant="ghost"
                onClick={() => setOpen(false)}
              >
                <Cross2Icon />
              </IconButton>

            </Flex>


            <Flex direction="column" gap="2">

              {renderLinks()}

            </Flex>


            <Flex
              align="center"
              gap="3"
              p="2"
              mt="4"
              onClick={handleLogout}
              style={{
                borderRadius: 8,
                cursor: "pointer"
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