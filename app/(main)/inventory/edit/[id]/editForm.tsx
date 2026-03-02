"use client";
import { ValidationInventoryCreateItem } from '@/app/_components/ValidationInventoryCreate';
import { Inventory } from '@/app/generated/prisma'
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, Box, TextField, Button, Spinner, Text, Select, Switch, Heading } from '@radix-ui/themes';
import { Bin, Location } from '@/app/generated/prisma';


import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';

interface Props {
  productItem?: Inventory;
  stores?: [];
  bins?: Bin[];
  locations?: Location[];
}



const EditForm = ({ productItem, bins, locations, stores }: Props) => {

  const { inv_id, inv_name, inv_desc, inv_quantity, inv_trigger,store_id, bin_id, loc_id, checkedBin } = productItem || {}


  const { register, control, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(ValidationInventoryCreateItem),
    defaultValues: {
      inv_name: productItem?.inv_name,
      inv_desc: productItem?.inv_desc ?? "",
      inv_quantity: productItem?.inv_quantity,
      inv_trigger: productItem?.inv_trigger,
      store_id: productItem?.store_id ?? null,
      checkedBin: productItem?.checkedBin ?? false,
      bin_id: productItem?.bin_id ?? null,
      loc_id: productItem?.loc_id ?? null,
    },

  });
  // const [isEnabledBin, setEnabledBin] = useState(checkedBin || false);
  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const isEnabledBin = watch("checkedBin");




  // console.log("edit form item:", productItem);


  const onSubmit = async (values: Inventory) => {
    console.log("submit: ", values);
    try {
      setIsSubmiting(true);
      await axios.put("/api/inventory/" + productItem?.inv_id, values);
      router.push('/inventory');
    } catch (error) {
      setIsSubmiting(false);
      setApiError("Unable to update item. Please try again.");
    }

  }


  return (
    <>
      <Heading size="4" my="3">Edit Item ID: {inv_id}</Heading>
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
            <TextField.Root disabled={isSubmiting}  placeholder="Name of product" {...register("inv_name")} />
          </Box>

          <Box>
            <TextField.Root disabled={isSubmiting} placeholder="Description" {...register("inv_desc")} />
          </Box>

          <Box>
            <TextField.Root disabled={isSubmiting} placeholder="Quantity" {...register("inv_quantity", { valueAsNumber: true })} />
          </Box>

          {/* Added new input field for trigger  */}
          <Box>
            <TextField.Root disabled={isSubmiting} placeholder="Trigger" {...register("inv_trigger", { valueAsNumber: true })} />
          </Box>


          {/* Store selection */}
          <Controller
              name="store_id"
              control={control}
              render={({ field }) => (
                <Box maxWidth="250px">
                  <Select.Root
                    value={field.value ? String(field.value) : ""}
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

          {/* <Controller
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
          /> */}

          <Controller
            name="checkedBin"
            control={control}
            
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            )}
          />


          {isEnabledBin ? <Controller
            name="bin_id"
            control={control}
            render={({ field }) => (
              <Box maxWidth="250px">
                <Select.Root
                  // If field.value is null, show "" in the select; otherwise convert number to string
                  // value={field.value ? String(field.value) : ""}

                  // When user selects something:
                  // - if they choose the empty option, store null
                  // - otherwise convert the selected string back to a number
                  value={field.value ? String(field.value) : ""}
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
              render={({ field }) => (
                <Box maxWidth="250px">
                  <Select.Root
                    value={field.value ? String(field.value) : ""}
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








          <Flex gap="2" direction="row">
            <Box>
              <Button disabled={isSubmiting}>{isSubmiting && <Spinner />}Update</Button>
            </Box>
            <Box>
              <Button color="red" disabled={isSubmiting} onClick={() => router.push('/inventory')}>{isSubmiting && <Spinner />}Cancel</Button>
            </Box>
          </Flex>
        </Flex>

      </form>
    </>
  )
}

export default EditForm;