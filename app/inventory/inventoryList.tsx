import { prisma } from '@/prisma/client'
import { Flex, Link, Table } from '@radix-ui/themes'
import React from 'react'
import ButtonDeleteItem from './deleteItem';
import ButtonEditItem from './buttonEditItem';




const InventoryList = async () => {

  const items = await prisma.inventory.findMany({
    where: {inv_status: "Active"}
  });
  // console.log("Inventory Items:", items);
  


  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.inv_id}>
            <Table.RowHeaderCell>{item.inv_id}</Table.RowHeaderCell>
            <Table.Cell><Link href={`/inventory/dataList/${item.inv_id}`}>{item.inv_name}</Link></Table.Cell>
            <Table.Cell>{item.inv_desc}</Table.Cell>
            <Table.Cell>{item.inv_quantity}</Table.Cell>
            <Table.Cell>
              <Flex gap="2">
                <ButtonEditItem itemId={item.inv_id}/>
                <ButtonDeleteItem itemId={item.inv_id}/>
              </Flex>
              
            </Table.Cell>
            
          </Table.Row>
        ))}

      </Table.Body>
    </Table.Root>

  )
}

export default InventoryList