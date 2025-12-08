import { prisma } from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import React from 'react'

const InventoryList = async () => {

  const items = await prisma.inventory.findMany();



  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.RowHeaderCell>{item.id}</Table.RowHeaderCell>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.description}</Table.Cell>
            <Table.Cell>{item.quantity}</Table.Cell>
          </Table.Row>
        ))}

      </Table.Body>
    </Table.Root>

  )
}

export default InventoryList