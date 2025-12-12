"use client";
import { ValidationInventoryCreateItem } from '@/app/_components/invalidationInventoryCreate';
import { Inventory } from '@/app/generated/prisma'
import { zodResolver } from '@hookform/resolvers/zod';
import { Heading, Flex, Box, TextField, Button } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';

import React from 'react'
import { useForm } from 'react-hook-form';

interface Props {
  productItem?: Inventory;
}

const EditForm = ({ productItem }: Props) => {

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ValidationInventoryCreateItem),
  });

  const router = useRouter();

  const { name, description, quantity } = productItem || {}

  const onSubmit = async (values: Inventory) => {
    // console.log("submit: ", values);
    await axios.put("/api/inventory/" + productItem?.id, values);
    router.push('/inventory');
  }


  return (
    <>
      <Heading size="4">Edit Item: 101</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="3" direction="column" width="400px">
          <Box>
            <TextField.Root defaultValue={name} placeholder="Name of product" {...register("name")} />
          </Box>
          <Box>
            <TextField.Root defaultValue={description} placeholder="Name of product" {...register("description")} />
          </Box>
          <Box>
            <TextField.Root defaultValue={quantity} placeholder="Name of product" {...register("quantity", { valueAsNumber: true })} />
          </Box>
          <Box>
            <Button>Submit</Button>
          </Box>
        </Flex>

      </form>
    </>
  )
}

export default EditForm;