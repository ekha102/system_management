import { prisma } from '@/prisma/client';
import { Table } from '@radix-ui/themes';
import React from 'react'

const LocationPage = async () => {

  const locations = await prisma.location.findMany();


  return (
    <>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name of Location</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description of Location</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {locations.map((loc) =>
            <Table.Row key={loc.loc_id}>
              <Table.RowHeaderCell>{loc.loc_id}</Table.RowHeaderCell>
              <Table.Cell>{loc.loc_name}</Table.Cell>
              <Table.Cell>{loc.loc_desc}</Table.Cell>
            </Table.Row>
          )}


        </Table.Body>
      </Table.Root>

    </>
  )
}

export default LocationPage;