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
  Spinner,
} from "@radix-ui/themes";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValidationCreateAccount } from "@/app/_components/ValidationCreateAccount";
import { z } from "zod";
import { Eye, EyeClosed } from "lucide-react";



// Define the form data type based on Zod schema
type FormData = z.infer<typeof ValidationCreateAccount>;


const CreateAccount = () => {


  const [showPassword, setShowPassword] = useState(false);  // Show/hide password textfield
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); //Show/hide confirm password textfield
  const [usernameAvailable, setUsernameAvailable] = useState(false); // Username is available
  const router = useRouter();

  const { register, handleSubmit, setError, getValues, clearErrors, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(ValidationCreateAccount),
    mode: "onBlur"

  });


  const handleUsernameBlur = async () => {
    const checkUsername = getValues("user_username").trim();

    // If the username is empty then return
    if (!checkUsername) return;

    // Send the data to backend:
    const response = await axios.get('/api/auth/check-username', { params: { checkUsername } })
    try {
      // Checking for the response return
      if (response.status === 200) {
        if (response.data.available) {
          setUsernameAvailable(false);
          setError("user_username", {
            type: "manual",
            message: "Username already taken",
          });
        } else {
          clearErrors("user_username");
          setUsernameAvailable(true)
        }
      }
    } catch (error) {
      setUsernameAvailable(false);
      setError("user_username", {
        type: "manual",
        message: "Unable to verify username",
      });
    }
  };



  const onSubmit = async (data: FormData) => {
    // console.log("Data:", data)
    try {
      // Send to the backend API to post:
      const request = await axios.post("/api/auth/login/create-account", data);
      console.log("Request: ", request)
      if (request.status === 201) {
        // When the user completed for creating account, force the user to sign to get JWT
        router.push("/login?created=true");
      }

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Card size="4" style={{ width: 380 }}>
        <Heading align="center" mb="4">
          Create Account
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap="5">

            {/* Username */}
            <Box>
              <Flex direction="column" gap="1">
                <TextField.Root
                  placeholder="Username"
                  {...register("user_username")}
                  onBlur={handleUsernameBlur}
                  disabled={isSubmitting}
                />

                {errors.user_username && (
                  <Text color="red" size="2" style={{ minHeight: 20 }}>
                    {errors.user_username.message}
                  </Text>
                )}

                {!errors.user_username && usernameAvailable && (
                  <Text color="green" size="2" style={{ minHeight: 20 }}>
                    Username is available
                  </Text>
                )}
              </Flex>
            </Box>

            {/* Full Name */}
            <Box>
              <Flex direction="column" gap="1">
                <TextField.Root
                  placeholder="Full Name"
                  {...register("user_fullName")}
                  disabled={isSubmitting}
                />

                {errors.user_fullName && (
                  <Text color="red" size="2" style={{ minHeight: 20 }}>
                    {errors.user_fullName.message}
                  </Text>
                )}
              </Flex>
            </Box>

            {/* Password */}
            <Box>
              <Flex direction="column" gap="1">
                <TextField.Root
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("user_password")}
                  disabled={isSubmitting}
                >
                  <TextField.Slot side="right">
                    <Button
                      variant="soft"
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </Button>
                  </TextField.Slot>
                </TextField.Root>

                {errors.user_password && (
                  <Text color="red" size="2" style={{ minHeight: 20 }}>
                    {errors.user_password.message}
                  </Text>
                )}
              </Flex>
            </Box>

            {/* Confirm Password */}
            <Box>
              <Flex direction="column" gap="1">
                <TextField.Root
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("user_confirmPassword")}
                  disabled={isSubmitting}
                >
                  <TextField.Slot side="right">
                    <Button
                      variant="soft"
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((prev) => !prev)
                      }
                    >
                      {showConfirmPassword ? <Eye /> : <EyeClosed />}
                    </Button>
                  </TextField.Slot>
                </TextField.Root>

                {errors.user_confirmPassword && (
                  <Text color="red" size="2" style={{ minHeight: 20 }}>
                    {errors.user_confirmPassword.message}
                  </Text>
                )}
              </Flex>
            </Box>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <><Spinner mr="2" />Creating...</> : "Create Account"}
            </Button>

          </Flex>
        </form>
      </Card>
    </Flex>
  );
}

export default CreateAccount;