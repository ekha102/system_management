"use client";

import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Card,
  Flex,
  TextField,
  Button,
  Text,
  Heading,
  Box,
} from "@radix-ui/themes";
import axios from "axios";
import { resolve } from "path";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationCreateAccount } from "@/app/_components/ValidationCreateAccount";
import { z } from "zod";



// Define the form data type based on Zod schema
type FormData = z.infer<typeof ValidationCreateAccount>;


const CreateAccount = () => {
  const [usernameAvailable, setUsernameAvailable] = useState(false);


  const { register, handleSubmit, setError, clearErrors, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(ValidationCreateAccount),
    mode: "onBlur"

  });

  // RHF register object
  const usernameRegister = register("user_username");

  /**
   * ✅ Username availability check (onBlur)
   */
  const handleUsernameBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    // Keep RHF behavior
    usernameRegister.onBlur(e);

    const username = e.target.value.trim();
    if (!username) return;

    try {
      const res = await axios.get(`/api/auth/check-username?username=${username}`);

      if (!res.data.available) {
        setUsernameAvailable(false);
        setError("user_username", {
          type: "manual",
          message: "Username already taken",
        });
      } else {
        setUsernameAvailable(true);
        clearErrors("user_username");
      }
    } catch {
      setUsernameAvailable(false);
      setError("user_username", {
        type: "manual",
        message: "Unable to verify username",
      });
    }
  };

  /**
   * ✅ Clear error when user types again
   */
  const handleUsernameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUsernameAvailable(false);
    clearErrors("user_username");
    usernameRegister.onChange(e);
  };



  const onSubmit = async (data: FormData) => {
    // console.log("Data:", data)
    const request = await axios.post("/api/auth/login/create-account", data);


    if (request.status === 201) {
      // When the user completed for creating account, force the user to sign to get JWT
      redirect("/login");
    }



  };

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Card size="4" style={{ width: 380 }}>
        <Heading align="center" mb="4">
          Create Inventory Account
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="3">

            {/* Username */}
            <Box my="2">
              <TextField.Root placeholder="Username" {...register("user_username")} onBlur={handleUsernameBlur} onChange={handleUsernameChange}/>
              
              {/* Error (red) */}
              {errors.user_username && (
                <Text color="red" size="2">
                  {errors.user_username.message}
                </Text>
              )}

              {/* Success (green) */}
              {!errors.user_username && usernameAvailable && (
                <Text color="green" size="2">
                  Username is available
                </Text>
              )}
            </Box>










            {/* Full Name */}
            <TextField.Root
              placeholder="Full Name"
              {...register("user_fullName")}
            />
            {errors.user_fullName && (
              <Text color="red" size="2">
                {errors.user_fullName.message}
              </Text>
            )}

            {/* Password */}
            <TextField.Root
              type="password"
              placeholder="Password"
              {...register("user_password")}
            />
            {errors.user_password && (
              <Text color="red" size="2">
                {errors.user_password.message}
              </Text>
            )}

            {/* Confirm Password */}
            <TextField.Root
              type="password"
              placeholder="Confirm Password"
              {...register("user_confirmPassword")}
            />
            {errors.user_confirmPassword && (
              <Text color="red" size="2">
                {errors.user_confirmPassword.message}
              </Text>
            )}



            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Account"}
            </Button>
          </Flex>
        </form>
      </Card>
    </Flex>
  );
}

export default CreateAccount;