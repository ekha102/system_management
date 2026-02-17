"use client";

import { InvalidationCreateProduct } from "@/app/_components/InvalidationCreateProduct";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField, Text, Box, Container, Flex, TextArea } from "@radix-ui/themes";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

// type  ProductFormData = {
//   product_name: string;
// }

type ProductFormData = z.infer<typeof InvalidationCreateProduct>;

const CreateProductForm = () => {

  const router = useRouter();

  const { register, control, handleSubmit, reset,  formState: { errors, isValid, isSubmitting } } = useForm<ProductFormData>({
    resolver: zodResolver(InvalidationCreateProduct),
  });


  const onsubmit = async (values: ProductFormData) => {
    // console.log(values);
    try {
      await axios.post('/api/products/create', values);
      reset();
      toast.success("Created product!");
      router.replace("/products");
    } catch (error) {
      toast.error("Unable to create product, please check network")
      
    }
    
  }


  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <Flex direction="column" gap="5" className="w-1/4">
          {/* Product Name  */}
          <Box>
            <TextField.Root placeholder="Product Name" {...register("prod_name")} />
            {errors.prod_name && (<Text color="red" size="1">{errors.prod_name.message}</Text>)}
          </Box>

          {/* SKU  */}
          <Box>
            <TextField.Root placeholder="SKU" {...register("prod_sku")} />
            {errors.prod_sku && (<Text color="red" size="1">{errors.prod_sku.message}</Text>)}
          </Box>
          
          <Box>
            <TextArea placeholder="Reply to comment…" {...register("prod_desc")} />
            {errors.prod_desc && (<Text color="red" size="1">{errors.prod_desc.message}</Text>)}
          </Box>

          <Button type="submit" disabled={!isValid || isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</Button>
        </Flex>

      </form>
      <Toaster position="top-center"/>
    </>
  )
}
export default CreateProductForm;