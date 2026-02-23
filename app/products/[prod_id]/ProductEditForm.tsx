'use client'

import { InvalidationCreateProduct } from "@/app/_components/InvalidationCreateProduct";
import { Product } from "@/app/generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { Flex, Box, TextField, Button, TextArea, Text, Heading, Spinner } from "@radix-ui/themes";
import axios from "axios";

import { register } from "module";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

interface props {
  productEdit: {
    prod_id: number,
    prod_name: string,
    prod_sku: string,
    prod_desc: string,
  }
}

type ProductFormData = z.infer<typeof InvalidationCreateProduct>;

const ProductEditForm = ({ productEdit }: props) => {
  // console.log("Inside Product form: ", productEdit);
  const router = useRouter();

  const { prod_id, prod_name, prod_sku, prod_desc } = productEdit;


  const { register, handleSubmit, getValues, setError, reset, formState: { errors, isValid, isSubmitting } } = useForm<ProductFormData>({
    resolver: zodResolver(InvalidationCreateProduct),
    defaultValues: {
      prod_name,
      prod_sku,
      prod_desc,
    },
    mode: "onChange",

  });


  const handleCheckSku = async () => {
    const prodSku = getValues("prod_sku");

    if (!prodSku) {
      setError("prod_sku", {
        type: "manual",
        message: "Please enter SKU first"
      });
      return;
    }

    try {
      const response = await axios.get("/api/products/check-sku", { params: { prodSku } });

      if (response.status === 200) {
        if (response.data.existingSku) {
          setError("prod_sku", {
            type: "manual",
            message: "SKU already exists ❌"
          })
        } else {
          setError("prod_sku", {
            type: "manual",
            message: "SKU is availabled ✅"
          })
        }
      }

    } catch (error) {
      setError("prod_sku", {
        type: "manual",
        message: "Error checking SKU"
      })
    }

  }

  const onSubmit = async (values: ProductFormData) => {
    // console.log("Submit: ", values);

    try {
      const response = await axios.put(`/api/products/${prod_id}`, values);
      if (response.status === 200) {
        reset();
        toast.success(response.data.message);
        router.replace("/products");
      } else {
        toast.error("Failed to update product");
      }
    } catch (error) {
      // get error message from backend and show in toast
      toast.error(`Error: ${error?.response?.data?.error}`);
    }
  }


  const handleDelete = async (prod_id: number) => {
    // console.log("prod_id: ", prod_id)
    try {
      const response = await axios.delete(`/api/products/${prod_id}`);
      console.log("Delete response: ", response.data.message);
      if (response.status === 200) {
        toast.success(response.data.message);
        router.replace("/products");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }


  }


  return (
    <>

      <Heading size="6">Edit Product ID: {prod_id}</Heading>
      <Flex direction="row" gap="6" className="w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>

          <Flex direction="column" gap="5">
            <Box>
              <TextField.Root placeholder="Product name" {...register("prod_name")} disabled={isSubmitting} />
              {errors.prod_name && <Text color="red" size="1">{errors.prod_name?.message}</Text>}
            </Box>

            <Box>
              <Flex direction="row" gapX="2">
                <TextField.Root placeholder="SKU" {...register("prod_sku")} disabled={isSubmitting} />
                <Button type="button" disabled={isSubmitting} onClick={handleCheckSku}>Check SKU</Button>
              </Flex>
              {errors.prod_sku && <Text color="red" size="1">{errors.prod_sku.message}</Text>}
            </Box>


            <Box>
              <TextField.Root placeholder="Product Description" {...register("prod_desc")} disabled={isSubmitting} />
              {errors.prod_desc && <Text color="red" size="1">{errors.prod_desc.message}</Text>}
            </Box>


            <Button disabled={isSubmitting} type="submit">{isSubmitting ? <Spinner/> : "Submit"}</Button>
          </Flex>

        </form>

        <Button disabled={isSubmitting} color="red" onClick={() => handleDelete(prod_id)}>Delete</Button>

      </Flex>
      <Toaster position="top-center" />
    </>
  )

}


export default ProductEditForm;