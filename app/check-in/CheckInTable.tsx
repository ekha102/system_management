"use client"
import { AlertDialog, Button, Flex, Table, Text } from "@radix-ui/themes"
import { Inventory } from "../generated/prisma"
import QuantityControl from "./QuantityControl"
import { useState } from "react"
import axios from "axios"

interface Props {
  checkInItems: Inventory[],

}


const CheckInTable = ({ checkInItems }: Props) => {
  // console.log("check-In Items:", checkInItems);

  const [checkInAdjustment, setCheckInAdjustment] = useState(0);

  const handleCheckIn = (item: Inventory) => {
    console.log("Check-in adjustment:", checkInAdjustment);
    console.log("Check-in item ID:", item.inv_id);
    axios.put(`/api/check-in`, {
      inv_quantity: checkInAdjustment,
      inv_id: item.inv_id, // Replace with the actual inventory ID you want to update
    });
  };

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
              <Table.Cell>{item.bin?.bin_name}_{item.bin?.bin_id}</Table.Cell>
              <Table.Cell>{item.location?.loc_name}</Table.Cell>
              <Table.Cell>
                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button variant="classic" size="1">Check In</Button>
                  </AlertDialog.Trigger>

                  {/* Display the check-in details here, such as product name, quantity, etc. */}
                  <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>
                      Check In
                    </AlertDialog.Title>
                    <AlertDialog.Description size="2">
                      Please input the quantity for check in.
                      <Text my="2" as="div" size="3" weight="medium">{item.product?.prod_name}</Text>
                      <Text my="2" as="div" size="3" weight="medium">{item.inv_quantity}</Text>

                      <QuantityControl inv_quantity={item.inv_quantity} setCheckInAdjustment={setCheckInAdjustment} />
                    </AlertDialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                      <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </AlertDialog.Cancel>

                      <AlertDialog.Action>
                        <Button
                          color="green"
                          onClick={() => handleCheckIn(item)}
                        >
                          Check-In
                        </Button>
                      </AlertDialog.Action>
                    </Flex>
                  </AlertDialog.Content>

                </AlertDialog.Root>
              </Table.Cell>
            </Table.Row>
          ))}


        </Table.Body>
      </Table.Root>




    </>

  )
}
export default CheckInTable