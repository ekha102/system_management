"use client";
import { Box, Button, Callout, Flex, Spinner, Text, TextField } from '@radix-ui/themes';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidationInventoryCreateItem } from '@/app/_components/invalidationInventoryCreate';
import axios from 'axios';
import { useRouter } from 'next/navigation';



interface ItemForm {
  name: string;
  description: string;
  quantity: number;
}

const CreateItem = () => {

  const [isErrorApi, setIsErrorApi] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const router = useRouter();

  const { register, control, handleSubmit, formState: { errors } } = useForm<ItemForm>({
    resolver: zodResolver(ValidationInventoryCreateItem),
  });


  const onSubmit = async (values: ItemForm) => {
    // console.log("submit: ", values);
    // axios.post('/xapi/inventory', values);
    // Added try catch for error handling

    try {
      await axios.post('/api/inventory', values);
      setIsSubmiting(true);
      router.push('/inventory');
    } catch (error) {
      setIsErrorApi("Error occurred while creating item.");
      setIsSubmiting(false);
    }
  }

  return (
    <>
      {isErrorApi && 
        <Callout.Root my="2">
        <Callout.Text color='red'>
          {isErrorApi}
        </Callout.Text>
      </Callout.Root>
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="3">
          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} placeholder="Name of Item" {...register("name")} />
            {errors.name && <Text color='red'>{errors.name.message}</Text>}
          </Box>
          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} placeholder="Description" {...register("description")} />
            {errors.description && <Text color='red'>{errors.description.message}</Text>}
          </Box>
          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} type="number" placeholder="Quantity" {...register("quantity", { valueAsNumber: true })} />
            {errors.quantity && <Text color='red'>{errors.quantity.message}</Text>}
          </Box>

          <Box>
            <Button disabled={isSubmiting} type="submit">{isSubmiting && <Spinner/>}Submit</Button>
          </Box>
        </Flex>
      </form>
    </>
  )
}

export default CreateItem;