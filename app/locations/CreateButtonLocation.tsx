"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { Dialog, Button, Flex, TextField, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ValidationLocationForm } from '../_components/ValidationLocationForm'
import axios from 'axios'
import { useRouter } from 'next/navigation'



interface IFormInput {
  loc_name: string
  loc_desc: string
}


const CreateButtonLocation = ({locId}) => {
  
  console.log("loc Id in form:", locId);
  const [editingId, setEditingId] = useState<number | null>(null);
  


  const [open, setOpen] = useState(false);
  const router = useRouter();


  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<IFormInput>({
    resolver: zodResolver(ValidationLocationForm),
  });


  const onSubmit = async (values: IFormInput) => {
    // console.log(values)
    setOpen(false);
    await axios.post('/api/locations', values);
    reset();  // Reset form fields after submission
    
    router.refresh(); // Refresh the page to show the new location
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
                placeholder="Enter location description"
                {...register("loc_desc")}
              />
              {errors.loc_desc && <Text size="1" color="red">{errors.loc_desc.message}</Text>}
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">

            <Button variant="soft" color="gray" onClick={() => setOpen(false)}>
              Cancel
            </Button>


            <Button type="submit" disabled={!isValid}>Save</Button>

          </Flex>
        </form>

      </Dialog.Content>
    </Dialog.Root>

  )
}

export default CreateButtonLocation