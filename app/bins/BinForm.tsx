"use client";

import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ValidationBinFrom } from "../_components/ValidationBinForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bin } from "../generated/prisma";


interface CreateButtonBinProps {
  bin_desc?: string;
}

interface Props {
  closeDialog: () => void;
  binIdDetail?: Bin
}

const BinForm =  ({ closeDialog, binIdDetail }: Props) => {
  const router = useRouter();
  console.log("Detail Bin in form:", binIdDetail);
  const {bin_id, bin_desc} = binIdDetail;
  // const binDetailApi = await prisma.bin.findUnique({
  //    where: {bin_id: binDetail}
  // } 
  // )
  

  // React Hook Form
  const { register, handleSubmit, reset, formState:{errors, isValid} } =
    useForm<CreateButtonBinProps>({
      resolver: zodResolver(ValidationBinFrom),
    });

  const onSubmit = async (values: CreateButtonBinProps) => {
    try {
      if (bin_id) {
        await axios.put(`/api/bins/${bin_id}`, values)
      } else {
        await axios.post("/api/bins", values);
      }
      
      reset();
      router.refresh();
      closeDialog(); // ✅ closes dialog
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3">
        <TextField.Root
          defaultValue={bin_desc}
          placeholder="Enter bin description"
          {...register("bin_desc")}
          
        />
        {errors.bin_desc && <Text size="1" color="red">{errors.bin_desc.message}</Text>}
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Button type="button" variant="soft" onClick={closeDialog}>
          Cancel
        </Button>

        <Button disabled={!isValid} type="submit">Submit</Button>
      </Flex>
    </form>
  );
};

export default BinForm;
