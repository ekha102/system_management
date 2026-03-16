"use client";

import { ValidationCreateProduct } from "@/app/_components/ValidationCreateProduct";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField, Text, Box, Flex, TextArea } from "@radix-ui/themes";
import axios from "axios";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import Breadcrumb from "../../../_components/Breadcrumb";



type ProductFormData = z.infer<typeof ValidationCreateProduct>;

const CreateProductForm = () => {
  const router = useRouter();
  const [isCheckingSku, setIsCheckingSku] = useState(false);
  const [skuAvailable, setSkuAvailable] = useState(false);

  const breadcrumbList = [
    { label: "Products", href: "/products" },
    { label: "Create", href: "/products/create"}
  ];

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setError,
    clearErrors,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProductFormData>({
    resolver: zodResolver(ValidationCreateProduct),
    mode: "onChange", // 🔥 important for live validation
  });

  // 🔥 SKU CHECK FUNCTION
  const handleCheckSku = async () => {
    const prodSku = getValues("prod_sku");

    if (!prodSku) {
      setError("prod_sku", {
        type: "manual",
        message: "Please enter SKU first",
      });
      return;
    }

    try {
      setIsCheckingSku(true);
      setSkuAvailable(false);

      const response = await axios.get("/api/products/check-sku", { params: { prodSku } });

      if (response.data.existingSku) {
        setError("prod_sku", {
          type: "manual",
          message: "SKU already exists ❌",
        });
        setSkuAvailable(false);
      } else {
        clearErrors("prod_sku"); // ✅ remove error
        setSkuAvailable(true);
        // toast.success("SKU is availableddd ✅");
      }

    } catch (error) {
      setError("prod_sku", {
        type: "manual",
        message: "Error checking SKU",
      });
      setSkuAvailable(false);
    } finally {
      setIsCheckingSku(false);
    }
  };

  // 🔥 SUBMIT FUNCTION
  const onsubmit = async (values: ProductFormData) => {
    try {
      await axios.post("/api/products/create", values);

      toast.success("Created product!");
      reset();
      router.replace("/products");

    } catch (error: any) {
      const status = error.response?.status;
      const message = error.response?.data?.error;

      if (status === 409) {
        setError("prod_sku", {
          type: "manual",
          message,
        });
        return;
      }

      toast.error(message || "Something went wrong");
    }
  };

  return (
    <div className="space-y-4">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbList} />



      <form onSubmit={handleSubmit(onsubmit)}>
        <Flex direction="column" gap="5" className="w-1/4">

          {/* Product Name */}
          <Box>
            <TextField.Root
              placeholder="Product Name"
              {...register("prod_name")}
              disabled={isSubmitting}
            />
            {errors.prod_name && (
              <Text color="red" size="1">
                {errors.prod_name.message}
              </Text>
            )}
          </Box>

          {/* SKU */}
          <Box>
            <Flex direction="row" gap="2">
              <TextField.Root
                placeholder="SKU"
                {...register("prod_sku")}
                disabled={isCheckingSku || isSubmitting}

              />
              <Button
                type="button"
                size="2"
                disabled={isCheckingSku || isSubmitting}
                onClick={handleCheckSku}
              >
                {isCheckingSku ? "Checking..." : "Check SKU"}
              </Button>
            </Flex>

            {errors.prod_sku && (
              <Text color="red" size="1">
                {errors.prod_sku.message}
              </Text>
            )}

            {!errors.prod_sku && skuAvailable && (
              <Text color="green" size="1">
                SKU is available ✅
              </Text>
            )}
          </Box>

          {/* Description */}
          <Box>
            <TextArea
              placeholder="Product description..."
              {...register("prod_desc")} disabled={isSubmitting}
            />
            {errors.prod_desc && (
              <Text color="red" size="1">
                {errors.prod_desc.message}
              </Text>
            )}
          </Box>

          {/* Submit */}
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

        </Flex>
      </form>

      <Toaster position="top-center" />
    </div>
  );
};

export default CreateProductForm;
