import { Box, Flex, Table } from '@radix-ui/themes'
import React from 'react'
import CreateButtonBin from './CreateButtonBin'
import { Bin } from '../../generated/prisma'
import EditBin from './EditBin'
import BinDeleteButton from './BinDeleteButton'
import { CustomFormatDate } from '@/app/_components/CustomFormatDate'


interface Props {
  bins: Bin[]
}



const BinViewTable = ({ bins }: Props) => {
  return (
    <>
      <Box my="4">
        <CreateButtonBin />
      </Box>
      
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {bins.map((bin) =>
            <Table.Row key={bin.bin_id}>
              <Table.RowHeaderCell>{bin.bin_id}</Table.RowHeaderCell>
              <Table.Cell>{bin.bin_name}</Table.Cell>
              <Table.Cell>{CustomFormatDate(bin.bin_createdAt)}</Table.Cell>
              <Table.Cell>{bin.bin_desc}</Table.Cell>
              <Table.Cell>
                <Flex direction="row" gap="2">
                  <EditBin binDetail={bin} />
                  <BinDeleteButton binIdDelete={bin.bin_id}/>
                </Flex>
              </Table.Cell>
            </Table.Row>
          )}

        </Table.Body>
      </Table.Root>
    </>
  )
}

export default BinViewTable