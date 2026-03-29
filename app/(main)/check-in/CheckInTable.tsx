"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertDialog, Box, Button, Flex, Table, Text, TextField } from "@radix-ui/themes"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ValidationCheckIn } from "../../_components/ValidationCheckIn"
import { Inventory } from "../../generated/prisma"
import ButtonCheckIn from "./ButtonCheckIn"


interface Props {
  checkInItems: Inventory[],

}


const CheckInTable = ({ checkInItems }: Props) => {
    

  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Trigger</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Restock</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Alert Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bins</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {checkInItems.map((item) => (
            <Table.Row key={item.inv_id}>
              <Table.RowHeaderCell>{item.inv_id}</Table.RowHeaderCell>
              <Table.Cell>{item.product?.prod_name}</Table.Cell>
              <Table.Cell>{item.inv_quantity}</Table.Cell>
              <Table.Cell>{item.inv_trigger}</Table.Cell>
              <Table.Cell>{item.inv_restock}</Table.Cell>
              <Table.Cell>{item.inv_alerted}</Table.Cell>
              <Table.Cell>{item.bin?.bin_name}</Table.Cell>
              <Table.Cell>{item.location?.loc_name}</Table.Cell>
              <Table.Cell>
                <ButtonCheckIn itemId={item.inv_id} />
              </Table.Cell>
            </Table.Row>
          ))}


        </Table.Body>
      </Table.Root>




    </>

  )
}
export default CheckInTable