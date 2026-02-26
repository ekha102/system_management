
"use client"
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const ButtonCreateItem = () => {
  return (
    <Button><Link href="/inventory/create">Create Inventory</Link></Button>
  )
}

export default ButtonCreateItem;