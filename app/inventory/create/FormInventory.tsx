"use client";

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidationInventoryCreateItem } from '@/app/_components/invalidationInventoryCreate';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Callout, Flex, Box, TextField, Button, Spinner, Text, Select, Switch } from '@radix-ui/themes';
import { Bin, Location } from '@/app/generated/prisma';



interface ItemForm {
  inv_name: string;
  inv_desc: string;
  inv_quantity: number;
  bin_id: number | null;
  loc_id: number | null;
  checkedBin: boolean;    //Add Check Bin
}

interface Props {
  bins?: Bin[];
  locations?: Location[];
}



const FormInventory = ({ bins, locations }: Props) => {

  const [isErrorApi, setIsErrorApi] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isEnabledBin, setEnabledBin] = useState(false)
  const router = useRouter();
  console.log("current state of isEnabledBin: ", isEnabledBin);


  // const [checkedBin, setCheckedBin] = useState(false);

  // console.log("Bin Passed to form: ", bins);
  // console.log("Location Passed to form: ", locations);


  const { register, control, handleSubmit, formState: { errors } } = useForm<ItemForm>({
    resolver: zodResolver(ValidationInventoryCreateItem),
    defaultValues: {
      checkedBin: false, // 👈 switch default OFF
    },
  });


  const onSubmit = async (values: ItemForm) => {
    console.log("current state of isEnabledBin in submiting : ", isEnabledBin);
    console.log("Switch value:", values.checkedBin);

    const payload = {
      ...values,
      isBinEnabled: values.checkedBin, // true / false
    };

    try {
      await axios.post('/api/inventory', payload);
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
            <TextField.Root disabled={isSubmiting} placeholder="Name of Item" {...register("inv_name")} />
            {errors.inv_name && <Text color='red'>{errors.inv_name.message}</Text>}
          </Box>
          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} placeholder="Description" {...register("inv_desc")} />
            {errors.inv_desc && <Text color='red'>{errors.inv_desc.message}</Text>}
          </Box>
          <Box maxWidth="250px">
            <TextField.Root disabled={isSubmiting} type="number" placeholder="Quantity" {...register("inv_quantity", { valueAsNumber: true })} />
            {errors.inv_quantity && <Text color='red'>{errors.inv_quantity.message}</Text>}
          </Box>



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
            defaultValue={false}
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