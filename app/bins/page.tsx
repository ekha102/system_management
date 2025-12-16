import { prisma } from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import React from 'react'

const Bins = async () => {

  const bins = await prisma.bin.findMany();
  // console.log("Bin: ", bins);

  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bins.map((bin) =>
            <Table.Row key={bin.bin_id}>
              <Table.RowHeaderCell>{bin.bin_id}</Table.RowHeaderCell>
              <Table.Cell>{bin.bin_name}_{bin.bin_id}</Table.Cell>
              <Table.Cell>{bin.bin_desc}</Table.Cell>
            </Table.Row>
          )}

        </Table.Body>
      </Table.Root>

    </>
  )
}

export default Bins