"use client";

import { ValidationInventoryCreateItem } from '@/app/_components/ValidationInventoryCreate';
import { Inventory, Bin, Location } from '@/app/generated/prisma';
import { Product } from '@prisma/client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { InfoCircledIcon } from "@radix-ui/react-icons";

import {
  Callout,
  Flex,
  Box,
  TextField,
  Button,
  Spinner,
  Text,
  Select,
  Switch,
  Grid
} from '@radix-ui/themes';

import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface Store {
  store_id: number;
  store_name: string;
}

interface Props {
  productItem?: Inventory;
  stores?: Store[];
  bins?: Bin[];
  locations?: Location[];
  products?: Product[];
}

const EditForm = ({ productItem, bins, locations, stores, products }: Props) => {

  const {
    inv_id,
    prod_id,
    prod_name,
    inv_quantity,
    inv_trigger,
    store_id,
    inv_restock,
    bin_id,
    loc_id,
    checkedBin
  } = productItem || {};

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(ValidationInventoryCreateItem),
    defaultValues: {
      inv_id,
      prod_id,
      prod_name,
      inv_trigger,
      inv_restock,
      inv_quantity,
      store_id,
      checkedBin: checkedBin ?? false,
      bin_id: bin_id ?? null,
      loc_id: loc_id ?? null,
    }
  });


  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  // const [isEnabledBin, setEnabledBin] = useState(Boolean(checkedBin));

  const isEnabledBin = watch("checkedBin");


  useEffect(() => {
    if (isEnabledBin) {
      // Switching to BIN
      setValue("loc_id", null);

      // 👉 Default to UNASSIGNED instead of first bin
      if (!bin_id && bins?.length) {
        setValue("bin_id", bins[0].bin_id);
      }

    } else {
      // Switching to LOCATION
      setValue("bin_id", null);

      // (keep your existing logic if you want auto-select location)
      if (!loc_id && locations?.length) {
        setValue("loc_id", locations[0].loc_id);
      }
    }
  }, [isEnabledBin]);



  const onSubmit = async (values: Inventory) => {
    console.log("Values data Edit:", values)
    try {
      setIsSubmiting(true);
      await axios.put("/api/inventory/" + productItem?.inv_id, values);
      router.push('/inventory');
    } catch (error) {
      setIsSubmiting(false);
      setApiError("Unable to update item. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="3" width="400px">

        {apiError && (
          <Callout.Root my="2" color="red">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>{apiError}</Callout.Text>
          </Callout.Root>
        )}

        <Box>

          <Grid columns="120px 1fr" align="center" gap="3">

            {/* Product */}
            <Text align="right">Product</Text>
            <Controller
              name="prod_id"
              control={control}
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
                          <Select.Item
                            key={product.prod_id}
                            value={String(product.prod_id)}
                          >
                            {product.prod_id} - {product.prod_name}
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>

                  {errors.prod_id && (
                    <Text color="red">{errors.prod_id.message}</Text>
                  )}
                </Box>
              )}
            />

            {/* Trigger */}
            <Text align="right">Trigger</Text>
            <TextField.Root
              placeholder="Trigger"
              disabled={isSubmiting}
              {...register("inv_trigger", { valueAsNumber: true })}
            />

            {/* Restock */}
            <Text align="right">Restock</Text>
            <TextField.Root
              placeholder="Restock"
              disabled={isSubmiting}
              {...register("inv_restock", { valueAsNumber: true })}
            />

            {/* Quantity */}
            <Text align="right">Quantity</Text>
            <TextField.Root
              placeholder="Quantity"
              disabled={isSubmiting}
              {...register("inv_quantity", { valueAsNumber: true })}
            />

            {/* Store */}
            <Text align="right">Store</Text>
            <Controller
              name="store_id"
              control={control}
              render={({ field }) => (
                <Box maxWidth="250px">
                  <Select.Root
                    value={field.value ? String(field.value) : ""}
                    onValueChange={(value) =>
                      field.onChange(value ? Number(value) : null)
                    }
                    disabled={isSubmiting}
                  >
                    <Select.Trigger placeholder="Select store" />

                    <Select.Content>
                      <Select.Group>
                        <Select.Item value="null">Unassigned</Select.Item>

                        {stores?.map((store) => (
                          <Select.Item
                            key={store.store_id}
                            value={String(store.store_id)}
                          >
                            {store.store_name}
                          </Select.Item>
                        ))}
                      </Select.Group>
                    </Select.Content>
                  </Select.Root>

                  {errors.store_id && (
                    <Text color="red">{errors.store_id.message}</Text>
                  )}
                </Box>
              )}
            />

            {/* Bin Toggle */}
            <Text align="right">Bin?</Text>
            <Controller
              name="checkedBin"
              control={control}
              render={({ field }) => (
                <Switch
                  checked={Boolean(field.value)}
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                  }}
                />
              )}
            />

            {/* Conditional Field */}
            {isEnabledBin ? (
              <>
                <Text align="right">Bin</Text>

                <Controller
                  name="bin_id"
                  control={control}
                  render={({ field }) => (
                    <Box maxWidth="250px">
                      <Select.Root
                        value={field.value !== null ? String(field.value) : "null"}

                        onValueChange={(value) =>
                          field.onChange(value === "null" ? null : Number(value))
                        }
                        disabled={isSubmiting}
                      >
                        <Select.Trigger />

                        <Select.Content>
                          <Select.Group>
                            {bins?.map((bin) => (
                              <Select.Item
                                key={bin.bin_id}
                                value={String(bin.bin_id)}
                              >
                                {bin.bin_name}_{bin.bin_id}
                              </Select.Item>
                            ))}
                          </Select.Group>
                        </Select.Content>
                      </Select.Root>

                      {errors.bin_id && (
                        <Text color="red">{errors.bin_id.message}</Text>
                      )}
                    </Box>
                  )}
                />
              </>
            ) : (
              <>
                <Text align="right">Location</Text>

                <Controller
                  name="loc_id"
                  control={control}
                  render={({ field }) => (
                    <Box maxWidth="250px">
                      <Select.Root
                        value={field.value !== null ? String(field.value) : "null"}
                        onValueChange={(value) =>
                          field.onChange(value === "null" ? null : Number(value))
                        }
                        disabled={isSubmiting}
                      >
                        <Select.Trigger />

                        <Select.Content>
                          <Select.Group>
                            {locations?.map((loc) => (
                              <Select.Item
                                key={loc.loc_id}
                                value={String(loc.loc_id)}
                              >
                                {loc.loc_name}
                              </Select.Item>
                            ))}
                          </Select.Group>
                        </Select.Content>
                      </Select.Root>

                      {errors.loc_id && (
                        <Text color="red">{errors.loc_id.message}</Text>
                      )}
                    </Box>
                  )}
                />
              </>
            )}

          </Grid>

        </Box>

        <Flex gap="2" justify="center" mt="4">
          <Button disabled={isSubmiting}>
            {isSubmiting && <Spinner />}
            Update
          </Button>

          <Button
            type="button"
            color="red"
            disabled={isSubmiting}
            onClick={() => router.push('/inventory')}
          >
            Cancel
          </Button>
        </Flex>

      </Flex>
    </form>
  );
};

export default EditForm;