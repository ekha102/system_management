"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Text } from "@radix-ui/themes";
import axios from "axios";

type FormData = {
  username: string;
  password: string;
};

export default function LoginScreen() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Create account for data", data);
      await axios.post("/api/auth/login", data);

      // JWT cookie is now set by the server
      router.push("/login");
    } catch (err: any) {
      const message =
        err?.response?.data?.error || "Invalid username or password";

      setError("root", { message });
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl mb-4 font-bold text-center">
          Inventory Login
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-2"
          {...register("username", {
            required: "Username is required",
          })}
        />
        {errors.username && (
          <p className="text-red-500 text-sm mb-2">
            {errors.username.message}
          </p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-2"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">
            {errors.password.message}
          </p>
        )}

        {/* Server Error */}
        {errors.root && (
          <p className="text-red-500 text-sm mb-2">
            {errors.root.message}
          </p>
        )}

        <Text size="1" color="blue" mb="4">
          <Link href="/login/create-account">
            Create Account
          </Link>
        </Text>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}