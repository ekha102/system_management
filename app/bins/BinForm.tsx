"use client";

import { Button, Flex, TextField, Text, Spinner } from "@radix-ui/themes";
import axios from "axios";
import React, { useState } from "react";
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
  binIdDetail?: Bin;
}

const BinForm =  ({ closeDialog, binIdDetail }: Props) => {
  const router = useRouter();
  const [isSubmiting, setIsSubmiting] = useState(false);

  // React Hook Form
  const { register, handleSubmit, reset, formState:{errors, isValid} } =
    useForm<CreateButtonBinProps>({
      resolver: zodResolver(ValidationBinFrom),
    });

  // If the binId Detail is not existed then empty object
  const { bin_id, bin_desc } = binIdDetail || {};

  const onSubmit = async (values: CreateButtonBinProps) => {
    try {
      setIsSubmiting(true);
      if (bin_id) {
        await axios.put(`/api/bins/${bin_id}`, values);
      } else {
        await axios.post("/api/bins", values);
      }
      
      reset();
      router.refresh();
      closeDialog(); // ✅ closes dialog
    } catch (error) {
      setIsSubmiting(false)
      console.log(error);
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

        <Button disabled={isSubmiting} type="submit">{isSubmiting ? <Spinner/> : ""} {bin_id ? "Update" : "Submit"}</Button>
      </Flex>
    </form>


  );
};

export default BinForm;
