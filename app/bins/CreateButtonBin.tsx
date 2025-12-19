"use client"
import { Dialog, Button, Flex, TextField } from '@radix-ui/themes'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';


interface CreateButtonBinProps {
  bin_desc?: string;
}


const CreateButtonBin = () => {

  const router = useRouter();

  // React Hook Form
  const { register, handleSubmit, reset } = useForm<CreateButtonBinProps>()

  const onSubmit = async (values: CreateButtonBinProps) => {
    // console.log(values);
    try {
      await axios.post("/api/bins", values)
      reset(); // Reset form fields after submission
      router.refresh(); // Refresh the page to show the new bin
    } catch (error) {
      console.log(error);
    }
    

  }

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Create Bin</Button>
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px" aria-describedby={undefined}>
          <Dialog.Title>Create Bin</Dialog.Title>
      
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap="3">
              <label>

                <TextField.Root
                  // defaultValue="Freja Johnsen"
                  placeholder="Enter bin decscription"
                  {...register("bin_desc")}
                />
              </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button type="button" variant="soft" color="gray">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button type="submit">Submit</Button>
              </Dialog.Close>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>

    </>
  )
}

export default CreateButtonBin