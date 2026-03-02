'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationStoreForm } from "../../_components/ValidationStoreForm";
import toast, { Toaster } from "react-hot-toast";

interface IFormInput {
  store_name: string,
  store_desc: string,
}

type StoreFormInputProps = {
  onClose: () => void;
};

const StoreFormInput = ({ onClose }: StoreFormInputProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(ValidationStoreForm),
  });

  const onSubmit = async (values: IFormInput) => {
    // console.log('store input: ',values);
    try {
      setIsSubmitting(true);
      await axios.post('/api/stores', values);
      reset();
      toast.success("Store created successfully!");
      router.refresh();
      setTimeout(() => {
        onClose();
      }, 800);
    } catch (error) {
      // console.log(error);
      toast.error("Failed to create store. Please try again.");
    } finally {
      setIsSubmitting(false);
      
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Dialog.Title>Create Store</Dialog.Title>
        <Flex direction="column" gap="3">
          <label>
            <TextField.Root
              // defaultValue={store_name}
              placeholder="Enter store name"
              {...register("store_name")}

            />
            {errors.store_name && (
              <Text size="1" color="red">{errors.store_name.message}</Text>
            )}
          </label>

          <label>
            <TextField.Root
              // defaultValue={store_desc}
              placeholder="Enter store description"
              {...register("store_desc")}

            />
            {errors.store_desc && (
              <Text size="1" color="red">{errors.store_desc.message}</Text>
            )}
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button
              type="button"
              variant="soft"
            >
              Cancel
            </Button>
          </Dialog.Close>

          <Button disabled={isSubmitting} type="submit">Submit</Button>
        </Flex>
      </form>

      <Toaster position="top-center" />
    </>

  )
}
export default StoreFormInput
