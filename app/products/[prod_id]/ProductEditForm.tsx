'use client'

import { InvalidationCreateProduct } from "@/app/_components/InvalidationCreateProduct";
import { Product } from "@/app/generated/prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { Flex, Box, TextField, Button, TextArea, Text, Heading } from "@radix-ui/themes";
import axios from "axios";

import { register } from "module";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { isValid, z } from "zod";

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
  const [skuAvailable, setSkuAvailable] = useState(false);

  const { prod_id, prod_name, prod_sku, prod_desc } = productEdit;


  const { register, handleSubmit, getValues, setError, formState: { errors } } = useForm<ProductFormData>({
    resolver: zodResolver(InvalidationCreateProduct),
    defaultValues: {
      prod_name,
      prod_sku,
      prod_desc,
    },
    // mode: "onChange",
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
            message: "SKU is available ✅"
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
        toast.success(response.data.message);
        console.log("Updated Product: ", response.data.product);
      } else {
        toast.error("Failed to update product");
      }
    } catch (error) {
      // get error message from backend and show in toast
      toast.error(`Error: ${error.response.data.error}`);
    }
  }



  return (
    <>

      <Heading size="6">Edit Product ID: {prod_id}</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Flex direction="column" gap="5" className="w-1/4">
          <Box>
            <TextField.Root placeholder="Product name" {...register("prod_name")} />
            {errors.prod_name && <Text color="red" size="1">{errors.prod_name?.message}</Text>}
          </Box>

          <Box>
            <Flex direction="row" gapX="2">
              <TextField.Root placeholder="SKU" {...register("prod_sku")} />
              <Button type="button" onClick={handleCheckSku}>Check SKU</Button>
            </Flex>
            {errors.prod_sku && <Text color="red" size="1">{errors.prod_sku.message}</Text>}
          </Box>


          <Box>
            <TextField.Root placeholder="Product Description" {...register("prod_desc")} />
            {errors.prod_desc && <Text color="red" size="1">{errors.prod_desc.message}</Text>}
          </Box>


          <Button type="submit">Submit</Button>
        </Flex>

      </form>
      <Toaster position="top-center" />
    </>
  )

}


export default ProductEditForm;