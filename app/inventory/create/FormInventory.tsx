"use client";

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidationInventoryCreateItem } from '@/app/_components/invalidationInventoryCreate';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Callout, Flex, Box, TextField, Button, Spinner, Text, Select, Switch, Table } from '@radix-ui/themes';
import { Bin, Location, Product, Store } from '@/app/generated/prisma';



interface ItemForm {
  prod_id: number | null;
  inv_quantity: number;
  inv_trigger: number;
  bin_id: number | null;
  loc_id: number | null;
  checkedBin: boolean;    //Add Check Bin
}

interface Props {
  bins?: Bin[];
  locations?: Location[];
  stores?: Store[];  // Add stores prop
  products?: Product[]
}



const FormInventory = ({ bins, locations, stores, products }: Props) => {

  const [isErrorApi, setIsErrorApi] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isEnabledBin, setEnabledBin] = useState(false)
  const router = useRouter();
  // console.log("current state of isEnabledBin: ", isEnabledBin);


  // const [checkedBin, setCheckedBin] = useState(false);

  // console.log("Bin Passed to form: ", bins);
  // console.log("Location Passed to form: ", locations);


  const { register, control, handleSubmit, formState: { errors } } = useForm<ItemForm>({
    resolver: zodResolver(ValidationInventoryCreateItem),
    defaultValues: {
      checkedBin: false, // 👈 switch default OFF
    },
  });

  const handleNumberSelectChange = (
    value: string,
    onChange: (value: number | null) => void
  ) => {
    const numberValue = value ? Number(value) : null;
    onChange(numberValue);
  };


  const onSubmit = async (values: ItemForm) => {
    // console.log("current state of isEnabledBin in submiting : ", isEnabledBin);
    // console.log("Switch value:", values.checkedBin);

    const payload = {
      ...values,
      isBinEnabled: values.checkedBin, // true / false
    };
    // console.log("Payload to submit:", payload);
    
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
              defaultValue={null} // first render is null
              render={({ field }) => (
                <Box maxWidth="250px">
                  <Select.Root
                    // onValueChange={(value) => field.onChange(value ? Number(value) : null)}
                    onValueChange={(value) => handleNumberSelectChange(value, field.onChange)
                    }
                    // onValueChange={handleProductChange}
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

          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} type="number" placeholder="Quantity" {...register("inv_quantity", { valueAsNumber: true })} />
            {errors.inv_quantity && <Text color='red'>{errors.inv_quantity.message}</Text>}
          </Box>

          {/* Added new input field for trigger */}
          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} type="number" placeholder="Trigger" {...register("inv_trigger", { valueAsNumber: true })} />
            {errors.inv_trigger && <Text color='red'>{errors.inv_trigger.message}</Text>}
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



          {/* Insert the new Switch Button here  */}
          {/* <Controller
            name="checkedBin"
            control={control}
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          /> */}

          <Controller
            name="checkedBin"
            control={control}
            // defaultValue={false}
            render={({ field }) => (
              <Switch
                checked={isEnabledBin}
                onCheckedChange={(checked) => {
                  setEnabledBin(checked);
                  field.onChange(checked);
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
                  // If field.value is null, show "" in the select; otherwise convert number to string
                  // value={field.value ? String(field.value) : ""}

                  // When user selects something:
                  // - if they choose the empty option, store null
                  // - otherwise convert the selected string back to a number
                  onValueChange={(value) => field.onChange(value ? Number(value) : null)}
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