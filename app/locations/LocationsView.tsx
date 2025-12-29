"use client"
import { Table, Button, Flex, Spinner } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import CreateButtonLocation from './CreateButtonLocation'
import { set } from 'zod'


const LocationsView = ({ locations }) => {
  

  const router = useRouter();

  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [locId, setLocId] = useState<number | null>(null);




  // Open form for editing
  const handleEditLocId = (locId: number) => {
    console.log("Edit Loc Id:", locId);
    setLocId(locId);
  }



  const handleDeleteLoc = async (loc_id: number) => {
    // console.log("Loc Id:", loc_id);
    // Implement delete functionality here
    try {
      setDeletingId(loc_id);
      await axios.delete(`/api/locations/${loc_id}`);
      router.refresh();
    } catch (error) {
      console.error("Error deleting location:", error);
      setDeletingId(null);
    }
  }



  return (
    <>
      <CreateButtonLocation locId={locId} />

      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name of Location</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description of Location</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {locations.map((loc) =>
            <Table.Row key={loc.loc_id}>
              <Table.RowHeaderCell>{loc.loc_id}</Table.RowHeaderCell>
              <Table.Cell>{loc.loc_name}</Table.Cell>
              <Table.Cell>{loc.loc_desc}</Table.Cell>
              <Table.Cell>
                {/* Future Action Buttons like Edit/Delete can go here */}
                <Flex gap="2">
                  <Button size="1" onClick={() => handleEditLocId(loc.loc_id)}>Edit</Button>
                  <Button variant="solid" size="1" color="red" disabled={deletingId === loc.loc_id} onClick={() => handleDeleteLoc(loc.loc_id)}>{deletingId === loc.loc_id ? <Spinner /> : "Del"}</Button>
                </Flex>

              </Table.Cell>
            </Table.Row>
          )}

        </Table.Body>
      </Table.Root>
    </>

  )
}

export default LocationsView