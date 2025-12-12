"use client";
import { ValidationInventoryCreateItem } from '@/app/_components/invalidationInventoryCreate';
import { Inventory } from '@/app/generated/prisma'
import { zodResolver } from '@hookform/resolvers/zod';
import { Heading, Flex, Box, TextField, Button, Spinner, Callout } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { InfoCircledIcon } from "@radix-ui/react-icons";

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface Props {
  productItem?: Inventory;
}

const EditForm = ({ productItem }: Props) => {

  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ValidationInventoryCreateItem),
  });

  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const { id, name, description, quantity } = productItem || {}

  const onSubmit = async (values: Inventory) => {
    // console.log("submit: ", values);
    try {
      setIsSubmitting(true);
      await axios.put("/api/inventory/" + productItem?.id, values);
      router.push('/inventory');
    } catch (error) {
      setIsSubmitting(false);
      setApiError("Unable to update item. Please try again.");
    }

  }


  return (
    <>
      <Heading size="4" my="3">Edit Item ID: {id}</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="3" direction="column" width="400px">
          {apiError &&
            <Callout.Root my="2" color="red">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                {apiError}
              </Callout.Text>
            </Callout.Root>
          }
          <Box>
            <TextField.Root disabled={isSubmitting} defaultValue={name} placeholder="Name of product" {...register("name")} />
          </Box>
          <Box>
            <TextField.Root disabled={isSubmitting} defaultValue={description} placeholder="Name of product" {...register("description")} />
          </Box>
          <Box>
            <TextField.Root disabled={isSubmitting} defaultValue={quantity} placeholder="Name of product" {...register("quantity", { valueAsNumber: true })} />
          </Box>
          <Box>
            <Button disabled={isSubmitting}>{isSubmitting && <Spinner />}Submit</Button>
          </Box>
        </Flex>

      </form>
    </>
  )
}

export default EditForm;