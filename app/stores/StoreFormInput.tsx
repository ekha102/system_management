import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationStoreForm } from "../_components/ValidationStoreForm";

interface IFormInput {
  store_name: string,
  store_desc: string,
}

const StoreFormInput = () => {

   const router = useRouter();
   const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>({
    resolver: zodResolver(ValidationStoreForm),
  });

  const onSubmit = async (values: IFormInput) => {
    // console.log('store input: ',values);
    try {
      setIsSubmitting(true);
      await axios.post('/xapi/stores', values);
      reset();
      router.refresh();
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }

    
    
  }


  return (
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

        <Dialog.Close>
          <Button disabled={isSubmitting} type="submit">Submit</Button>
        </Dialog.Close>


        


      </Flex>
    </form>
  )
}
export default StoreFormInput