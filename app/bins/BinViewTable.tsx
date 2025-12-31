import { Box, Table } from '@radix-ui/themes'
import React from 'react'
import CreateButtonBin from './CreateButtonBin'
import { Bin } from '../generated/prisma'
import EditBin from './EditBin'

interface Props {
  bins: Bin[]
}



const BinViewTable = ({ bins }: Props) => {
  return (
    <>
      <Box my="4">
        <CreateButtonBin />
      </Box>
      
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bins.map((bin) =>
            <Table.Row key={bin.bin_id}>
              <Table.RowHeaderCell>{bin.bin_id}</Table.RowHeaderCell>
              <Table.Cell>{bin.bin_name}_{bin.bin_id}</Table.Cell>
              <Table.Cell>{bin.bin_desc}</Table.Cell>
              <Table.Cell><EditBin binDetail={bin} /></Table.Cell>
            </Table.Row>
          )}

        </Table.Body>
      </Table.Root>
    </>
  )
}

export default BinViewTable