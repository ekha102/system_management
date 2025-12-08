"use client";
import { Flex, TabNav } from '@radix-ui/themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const currentPathname = usePathname();

  const links = [
    { label: 'Inventory', href: '/' },
    { label: 'Bins', href: '/bins' },
  ];

  return (

    <TabNav.Root mb="2">
      <TabNav.Link asChild>
        <Link href="/"><span><FaHome/></span></Link>
      </TabNav.Link>
      {links.map((link) => {
        return (
        <TabNav.Link asChild active={currentPathname === link.href} key={link.href}>
          <Link href={link.href}><span>{link.label}</span></Link>
        </TabNav.Link>);
      })}
    </TabNav.Root>

  )
}
export default Navbar