"use client"
import { AlertDialog, Button, Flex, Table, Text, Box, TextField } from "@radix-ui/themes"
import { Inventory } from "../generated/prisma"
import QuantityControl from "./QuantityControl"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { InvalidationCheckIn } from "../_components/InvalidationCheckIn"
import { zodResolver } from "@hookform/resolvers/zod"


interface Props {
  checkInItems: Inventory[],

}

type checkInForm = z.infer<typeof InvalidationCheckIn>


const CheckInTable = ({ checkInItems }: Props) => {
  // console.log("check-In Items:", checkInItems);
  const router = useRouter();

  const [checkInAdjustment, setCheckInAdjustment] = useState(0);

  const { register, handleSubmit, formState: { errors } } = useForm<checkInForm>({
    resolver: zodResolver(InvalidationCheckIn),

  });



  const onSubmit = (values: Inventory) => {
    console.log("values: ", values)
    console.log(checkInAdjustment)
    console.log(values.inv_id);
    // console.log("Check-in adjustment:", checkInAdjustment);
    // console.log("Check-in item ID:", item.inv_id);
    // try {
    //   const response = await axios.put(`/api/check-in`, {
    //     invtran_change: checkInAdjustment,
    //     inv_id: values.inv_id, // Replace with the actual inventory ID you want to update
    //   });
    //   if (response.status === 200) {
    //     toast.success(response.data.message);
    //     router.refresh();
    //   } else {
    //     toast.error(response.data.error);
    //   }
    // } catch (error) {
    //   toast.error("An error occurred while checking in the item.");
    // }



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
                  <AlertDialog.Trigger asChild>
                    <Button variant="classic" size="1">
                      Check In
                    </Button>
                  </AlertDialog.Trigger>

                  <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>
                      Check In
                    </AlertDialog.Title>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <AlertDialog.Description size="2">
                        Please input the quantity for check in.

                        <Text my="2" as="div" size="3" weight="medium">
                          {item.product?.prod_name}
                        </Text>

                        <Text my="2" as="div" size="3" weight="medium">
                          {item.inv_quantity}
                        </Text>

                        {/* Transaction Type  */}
                        {/* <Box maxWidth="250px">
                          <TextField.Root type="number" placeholder="Transaction Type" {...register("invtran_type")}
                          />
                          {errors.invtran_type && (<Text color="red">{errors.invtran_type.message}</Text>
                          )}
                        </Box> */}

                        {/* Transaction Note  */}
                        <Box maxWidth="250px">
                          <TextField.Root type="text" placeholder="Transaction Note" {...register("invtran_note")}
                          />
                          {errors.invtran_note && (<Text color="red">{errors.invtran_note.message}</Text>
                          )}
                        </Box>

                        <QuantityControl
                          inv_quantity={item.inv_quantity}
                          setCheckInAdjustment={setCheckInAdjustment}
                        />
                      </AlertDialog.Description>

                      <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel asChild>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>

                        <Button
                          color="green"
                          type="submit"
                        >
                          Check-In
                        </Button>
                      </Flex>
                    </form>
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