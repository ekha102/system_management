
import React from 'react'
import InventoryList from './inventoryList'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import ButtonCreateItem from './buttonCreateItem'


const InventoryPage = () => {
  return (
    <div>
      <ButtonCreateItem/>
      <InventoryList />
    </div>
  )
}

export default InventoryPage