import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { ValidationLogin } from "@/app/_components/ValidationLogin";
import jwt from "jsonwebtoken";

export const POST = async (request: NextRequest) => {

  // 1️⃣ Parse request body
  const body = await request.json();

  // 2️⃣ Validate input
  const validation = ValidationLogin.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid input data",
        errors: validation.error.format(),
      },
      { status: 400 }
    );
  }

  const { user_username, user_password } = validation.data;

  // 3️⃣ Normalize username
  const normalizedUsername = user_username.toLowerCase();

  // 4️⃣ Find user
  const existingUser = await prisma.user.findUnique({
    where: {
      user_username: normalizedUsername,
    },
    include: {
      role: true,
    },
  });

  if (!existingUser) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid username or password",
      },
      { status: 401 }
    );
  }

  // Verify password
  const isValidPassword = await bcrypt.compare(
    user_password,
    existingUser.user_password
  );

  console.log("isValidPassword", isValidPassword)

  if (!isValidPassword) {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid username or password",
      },
      { status: 401 }
    );
  }
  
  try {
    const { user_id, user_fullName, user_roleId } = existingUser;
    console.log("existingUser", existingUser)

    const token = jwt.sign(
      {
        user_id,
        user_fullName,
        user_roleId,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      }
    );
    console.log("Checking Token", token);

    // Create response first
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successfully",
        user: {
          user_id,
          user_fullName,
          user_roleId,
        },
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    // Return response
    console.log("Login successfully")
    return response;

  } catch (error) {
    console.error("Login error:");

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
};
