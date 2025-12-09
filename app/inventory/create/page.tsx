"use client";
import { Box, Button, Flex, Text, TextField } from '@radix-ui/themes';
import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidationInventoryCreateItem } from '@/app/_components/invalidationInventoryCreate';
import axios from 'axios';



interface ItemForm {
  name: string;
  description: string;
  quantity: number;
}

const CreateItem = () => {

  const { register, control, handleSubmit, formState: { errors } } = useForm<ItemForm>({
    resolver: zodResolver(ValidationInventoryCreateItem),
  });


  const onSubmit = (values: any) => {
    console.log("submit: ", values);
    axios.post('/api/inventory', values);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3">
        <Box maxWidth="250px">
          <TextField.Root placeholder="Name of Item" {...register("name")} />
          {errors.name && <Text color='red'>{errors.name.message}</Text>}
        </Box>
        <Box maxWidth="250px">
          <TextField.Root placeholder="Description" {...register("description")} />
          {errors.description && <Text color='red'>{errors.description.message}</Text>}
        </Box>
        <Box maxWidth="250px">
          <TextField.Root type="number" placeholder="Quantity" {...register("quantity", {valueAsNumber: true })} />
          {errors.quantity && <Text color='red'>{errors.quantity.message}</Text>}
        </Box>

        <Box>
          <Button type="submit">Submit</Button>
        </Box>
      </Flex>
    </form>
  )
}

export default CreateItem;