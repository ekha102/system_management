"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Box, Button, Flex, Spinner, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { z } from "zod";
import { ValidationLogin } from "@/app/_components/ValidationLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type FormData = z.infer<typeof ValidationLogin>;

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);  // Show/hide
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(ValidationLogin),
    mode: "onSubmit",

  });

  const onSubmit = async (data: FormData) => {

    try {
      setLoading(true);
      const response = await axios.post("/api/auth/login", data);

      // If login successful
      if (response.status === 200) {
        router.replace("/dashboard"); // redirect after login
      }

    // Return Error for status: 400/401/500
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Something went wrong";

      setError("root", { message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Flex gap="2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded shadow-md w-80"
        >
          <h2 className="text-xl mb-4 font-bold text-center">
            Inventory Login
          </h2>


          <Flex direction="column" gap="4">
            {/* Username */}
            <Box>
              <Flex direction="column" gap="1">
                <TextField.Root
                  placeholder="Username"
                  {...register("user_username")}
                  disabled={isSubmitting || loading}
                />
              </Flex>
            </Box>

            {/* Password */}
            <Box>
              <Flex direction="column" gap="1">
                <TextField.Root
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("user_password")}
                  disabled={isSubmitting || loading}
                >
                  <TextField.Slot side="right">
                    <Button
                      variant="soft"
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={isSubmitting || loading}
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </Button>
                  </TextField.Slot>
                </TextField.Root>
              </Flex>
            </Box>

            {/* Server error return message */}
            {errors.root && (
              <p className="text-red-500 text-sm mb-2">
                {errors.root.message}
              </p>
            )}

            {/* Take to create account form and disable when the user click on submit  */}
            {(!isSubmitting || !loading) &&
              <Text size="1" color="blue" mb="4">
                <Link href="/login/create-account">
                  Create Account
                </Link>
              </Text>
            }


            <Button
              type="submit"
              size="3"
              disabled={isSubmitting || loading}
            >
              {isSubmitting || loading ? <><Spinner mr="2" />Logging in..</> : "Login"}
            </Button>
          </Flex>

        </form>
      </Flex>

    </div>
  );
}