"use client";
import { Dialog, Flex, TextField, Button, Text } from "@radix-ui/themes"
import { ValidationStoreForm } from "../../_components/ValidationStoreForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Store } from "../../generated/prisma";
import axios from "axios";
import { useRouter } from "next/navigation";



interface IFormInput {
  store_name: string,
  store_desc: string,
}

interface Props {
  storeItem: Store[],
}

const EditStoreForm = ({ storeItem }: Props) => {
  const router = useRouter();

  const { store_id, store_name, store_desc } = storeItem || {};


  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(ValidationStoreForm),

  });



  const onSubmit = async (values: IFormInput) => {
    // console.log("Submit store: ", values);
    try {
      await axios.put(`/api/stores/${store_id}`, values);
      reset();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
    
  }




  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Dialog.Title>Edit Store</Dialog.Title>
      <Flex direction="column" gap="3">
        <label>
          <TextField.Root
            defaultValue={store_name}
            placeholder="Enter store name"
            {...register("store_name")}

          />
          {errors.store_name && (
            <Text size="1" color="red">{errors.store_name.message}</Text>
          )}
        </label>

        <label>
          <TextField.Root
            defaultValue={store_desc}
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
        
        <Dialog.Close>
          <Button
          // disabled={isSubmitting} 
          type="submit">Update</Button>
        </Dialog.Close>
        
      </Flex>
    </form>
  )
}
export default EditStoreForm