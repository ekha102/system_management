"use client";
import { ValidationCheckOutEdit } from "@/app/_components/ValidationCheckOutEdit";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inventory } from "@prisma/client";
import { Box, Button, Select, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

interface Props {
  checkOutDetail: Inventory | null;
}

type FormData = z.infer<typeof ValidationCheckOutEdit>;

const checkOutForm = ({ checkOutDetail }: Props) => {
  // console.log("Check Out Detail in CheckOutForm Component: ", checkOutDetail);
  const inv_id = checkOutDetail?.inv_id;
  const prod_name = checkOutDetail?.product?.prod_name ?? "";

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ValidationCheckOutEdit), // ✅ REQUIRED
    defaultValues: {
      inv_id,
      prod_name,
      invtran_change: 0,
      invtran_type: "CONSUMED",
      invtran_note: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS:", data);
    await axios.post("/api/check-out", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text align="right">ID:</Text>
        <TextField.Root {...register("inv_id")} readOnly />

        <Text align="right">Product Name: </Text>
        <TextField.Root {...register("prod_name")} readOnly />

        <Text align="right">Inventory Change:</Text>
        <TextField.Root
          {...register("invtran_change", { valueAsNumber: true })}
        />

        <Text align="right">Transaction Type:</Text>
        <Controller
          control={control}
          name="invtran_type"
          render={({ field }) => (
            <Box>
              <Select.Root
                value={field.value ? String(field.value) : ""}
                onValueChange={(value) => field.onChange(value)}
              >
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="CONSUMED">Consumed</Select.Item>
                  <Select.Item value="ADJUST">Adjusted</Select.Item>
                  <Select.Item value="DISCARD">Discarded</Select.Item>
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

export default checkOutForm;
