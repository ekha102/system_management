'use client'
import { TabNav } from '@radix-ui/themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa";


const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  // console.log('Current Path: ', currentPath);


  return (
    <TabNav.Root mb='2'>
      <TabNav.Link asChild>
        <Link href="/"><FaBug /></Link>
      </TabNav.Link>
      {links.map((link) => (
        <TabNav.Link asChild key={link.href} active={currentPath === link.href}>
          <Link href={link.href}>{link.label}</Link>
        </TabNav.Link>
      ))}         
    </TabNav.Root>
  )
}

export default Navbar