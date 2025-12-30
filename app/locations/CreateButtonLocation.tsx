"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { Dialog, Button, Flex, TextField, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ValidationLocationForm } from '../_components/ValidationLocationForm'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Location } from '../generated/prisma'



interface IFormInput {
  loc_name: string
  loc_desc: string
}

interface Props {
  locDetail?: Location
  open: boolean
  setOpen: (v: boolean) => void
}


const CreateButtonLocation = ({ locDetail, open,
  setOpen }: Props) => {

  // console.log("loc Id in form:", locDetail);
  const { loc_id, loc_name, loc_desc } = locDetail || {};

  const router = useRouter();


  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<IFormInput>({
    resolver: zodResolver(ValidationLocationForm),
  });


  const onSubmit = async (values: IFormInput) => {
    // console.log(values)
    try {
      if (loc_id) {
        await axios.put(`/api/locations/${loc_id}`, values);
      } else {
        await axios.post('/api/locations', values);
      }
      reset();  // Reset form fields after submission
      router.refresh(); // Refresh the page to show the new location
      
    } catch (error) {
      console.log(error);
    }
    
  }




  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>Create Location</Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Create Location</Dialog.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name of Location
              </Text>
              <TextField.Root
                defaultValue={loc_name}
                placeholder="Enter location name"
                {...register("loc_name")}
              />
              {errors.loc_name && <Text size="1" color="red">{errors.loc_name.message}</Text>}
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Description of Location
              </Text>
              <TextField.Root
                defaultValue={loc_desc}
                placeholder="Enter location description"
                {...register("loc_desc")}
              />
              {errors.loc_desc && <Text size="1" color="red">{errors.loc_desc.message}</Text>}
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>

            <Dialog.Close>
              <Button type="submit" disabled={!isValid}>Save</Button>
            </Dialog.Close>

            

          </Flex>
        </form>

      </Dialog.Content>
    </Dialog.Root>

  )
}

export default CreateButtonLocation