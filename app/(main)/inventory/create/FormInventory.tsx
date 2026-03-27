"use client";

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidationInventoryCreateItem } from '@/app/_components/ValidationInventoryCreate';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Callout, Flex, Box, TextField, Button, Spinner, Text, Select, Switch } from '@radix-ui/themes';
import { Bin, Location, Product, Store } from '@/app/generated/prisma';
import { z } from 'zod';



interface Props {
  bins?: Bin[];
  locations?: Location[];
  stores?: Store[];  // Add stores prop
  products?: Product[]
}

// Define the form data type based on Zod schema
type ItemForm = z.infer<typeof ValidationInventoryCreateItem>;


const FormInventory = ({ bins, locations, stores, products }: Props) => {

  const [isErrorApi, setIsErrorApi] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  // const [isEnabledBin, setEnabledBin] = useState(false);
  const router = useRouter();
  
  // console.log("current state of isEnabledBin: ", isEnabledBin);


  // const [checkedBin, setCheckedBin] = useState(false);

  // console.log("Bin Passed to form: ", bins);
  // console.log("Location Passed to form: ", locations);


  const { register, control, handleSubmit, watch, formState: { errors } } = useForm<ItemForm>({
    resolver: zodResolver(ValidationInventoryCreateItem),
    defaultValues: {
      checkedBin: false,
    },
  });

  const isEnabledBin = watch("checkedBin");

  const onSubmit = async (values: ItemForm) => {
    // console.log("current state of isEnabledBin in submiting : ", isEnabledBin);
    // console.log("Switch value:", values.checkedBin);

    const payload = {
      ...values,
      isBinEnabled: values.checkedBin, // true / false
    };
    console.log("Payload to submit:", payload);

    try {
      setIsSubmiting(true);  // Always disable the button on the top of the function
      await axios.post('/api/inventory', payload);

      router.push('/inventory');
    } catch (error) {
      setIsSubmiting(false);
      setIsErrorApi("Error occurred while creating item.");
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
            {/* Select product name  */}
            <Controller
              name="prod_id"
              control={control}
              // defaultValue={null} // first render is null
              render={({ field }) => (
                <Box maxWidth="250px">
                  <Select.Root
                    value={field.value ? String(field.value) : ""}
                    onValueChange={(value) => field.onChange(Number(value))}
                    disabled={isSubmiting}
                  >
                    <Select.Trigger placeholder="Select product" />

                    <Select.Content>
                      <Select.Group>
                        {products?.map((product) => (
                          <Select.Item key={product.prod_id} value={String(product.prod_id)}>{product.prod_id} - {product.prod_name}
                          </Select.Item>

                        ))}

                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                  {errors.prod_id && <Text color="red">{errors.prod_id.message}</Text>}
                </Box>
              )}
            />
          </Box>

          {/* <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} placeholder="Description" {...register("inv_desc")} />
            {errors.inv_desc && <Text color='red'>{errors.inv_desc.message}</Text>}
          </Box> */}

          {/* Quantity input  */}
          {/* <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} type="number" placeholder="Quantity" {...register("inv_quantity", { valueAsNumber: true })} />
            {errors.inv_quantity && <Text color='red'>{errors.inv_quantity.message}</Text>}
          </Box> */}


          {/* Added new input field for trigger */}
          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} type="number" placeholder="Trigger" {...register("inv_trigger", { valueAsNumber: true })} />
            {errors.inv_trigger && <Text color='red'>{errors.inv_trigger.message}</Text>}
          </Box>

          {/* Added new input field for restock */}
          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} type="number" placeholder="Restock" {...register("inv_restock", { valueAsNumber: true })} />
            {errors.inv_restock && <Text color='red'>{errors.inv_restock.message}</Text>}
          </Box>

          {/* Store selection */}
          <Controller
            name="store_id"
            control={control}
            defaultValue={null} // first render is null
            render={({ field }) => (
              <Box maxWidth="250px">
                <Select.Root
                  onValueChange={(value) => field.onChange(value ? Number(value) : null)}
                  disabled={isSubmiting}
                >
                  <Select.Trigger placeholder="Select store" />

                  <Select.Content>
                    <Select.Group>
                      <Select.Item value="null">Unassigned</Select.Item>
                      {stores?.map((store) => (
                        <Select.Item key={store.store_id} value={String(store.store_id)}>
                          {store.store_name}
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
                {errors.store_id && <Text color="red">{errors.store_id.message}</Text>}
              </Box>
            )}
          />


          {/* Toggle for CheckedBin  */}
          <Controller
            name="checkedBin"
            control={control}
            // defaultValue={false}
            render={({ field }) => (
              <Switch
                checked={Boolean(field.value)}
                onCheckedChange={(checked) => {
                  field.onChange(checked);
                  // setEnabledBin(checked);
                }}
              />
            )}
          />



          {isEnabledBin ? <Controller
            name="bin_id"
            control={control}
            defaultValue={null} // first render is null
            render={({ field }) => (
              <Box maxWidth="250px">
                <Select.Root
                  value={field.value ? String(field.value) : ""}
                  onValueChange={(value) =>
                          field.onChange(Number(value))
                        }
                  disabled={isSubmiting}
                >
                  <Select.Trigger placeholder="Select bin" />

                  <Select.Content>
                    <Select.Group>
                      {/* Unassigned option */}
                      <Select.Item value="null">Unassigned</Select.Item>

                      {bins.map((bin) => (
                        <Select.Item key={bin.bin_id} value={String(bin.bin_id)}>
                          {bin.bin_name}_{bin.bin_id}
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>

                {errors.bin_id && <Text color="red">{errors.bin_id.message}</Text>}
              </Box>
            )}
          />
            :
            <Controller
              name="loc_id"
              control={control}
              defaultValue={null} // first render is null
              render={({ field }) => (
                <Box maxWidth="250px">
                  <Select.Root
                    onValueChange={(value) => field.onChange(value ? Number(value) : null)}
                    disabled={isSubmiting}
                  >
                    <Select.Trigger placeholder="Select location" />

                    <Select.Content>
                      <Select.Group>
                        <Select.Item value="null">Unassigned</Select.Item>
                        {locations?.map((loc) => (
                          <Select.Item key={loc.loc_id} value={String(loc.loc_id)}>
                            {loc.loc_name}
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>
                  {errors.loc_id && <Text color="red">{errors.loc_id.message}</Text>}
                </Box>
              )}
            />
          }




          <Box>
            <Button disabled={isSubmiting} type="submit">{isSubmiting && <Spinner />}Submit</Button>
          </Box>
        </Flex>
      </form>
    </>
  )
}

export default FormInventory;