"use client";
import { ValidationCheckInEdit } from "@/app/_components/ValidationCheckInEdit";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inventory } from "@prisma/client";
import {
  Callout,
  Flex,
  Box,
  TextField,
  Button,
  Spinner,
  Text,
  Select,
  Switch,
  Grid,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

interface Props {
  checkInItemDetails: Inventory | null;
}

type FormData = z.infer<typeof ValidationCheckInEdit>;

const CheckInFormItem = ({ checkInItemDetails }: Props) => {
  const router = useRouter();

  // console.log("Check In Item Details in CheckInFormItem Component:", checkInItemDetails);
  const { inv_id, product } = checkInItemDetails;
  const { prod_name } = product;
  // console.log("Product name: ", prod_name)

  const { register, control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(ValidationCheckInEdit),
    defaultValues: {
      inv_id,
      prod_name,
      invtran_change: 0,
      invtran_type: "PURCHASE",
      invtran_note: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // console.log("Check-In:", data);
      const response = await axios.post(`/api/check-in/${inv_id}`, data);
      // console.log("Response return: ", response);
      router.push("/check-in");
    } catch (error) {
      console.error("Error submitting check-in:", error);
    }
  };

  // ✅ Create Form for edit check-in item details
  // ✅ Get the data from edit to display in the form
  // ✅ Validated the data
  // ✅ Put data to api
  // We need to update the inventory transaction table and also update the inventory quantity in the inventory table

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text align="right">ID Inventory:</Text>
        <TextField.Root disabled={true} {...register("inv_id")} />

        <Text align="right">Product</Text>
        <TextField.Root
          // disabled={isSubmiting}
          {...register("prod_name")}
        />

        {/* Inventory Change Value increment or decrement:  */}
        <Text align="right">Inventory Change:</Text>
        <TextField.Root
          // disabled={isSubmiting}
          {...register("invtran_change", { valueAsNumber: true })}
        />

        {/* Change Type */}
        <Text align="right">Change Type</Text>
        <Controller
          name="invtran_type"
          control={control}
          render={({ field }) => (
           <Box>
              <Select.Root
                value={field.value ? String(field.value) : ""}
                onValueChange={(value) => field.onChange(value)}
              >
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="PURCHASE">Purchase</Select.Item>
                  <Select.Item value="ADJUST">Adjust</Select.Item>
                </Select.Content>
              </Select.Root>
           </Box>
          )}
        />

        {/* Note */}
        <Text align="right">Note:</Text>
        <TextField.Root {...register("invtran_note")} />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
export default CheckInFormItem;
