
import React from 'react'
import InventoryList from './inventoryList'
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