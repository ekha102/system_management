import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"; import jwt from "jsonwebtoken";
import { ValidationLogin } from "@/app/_components/ValidationLogin";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const validation = ValidationLogin.safeParse(body);

    // 400 – Invalid input
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
    const normalizedUsername = user_username.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: { user_username: normalizedUsername },
      include: {
        role: true
      }
    });


    // 401 – Username not found
    if (!existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password",
        },
        { status: 401 }
      );
    }

    const isValidPassword = await bcrypt.compare(
      user_password,
      existingUser.user_password
    );

    // 401 – Wrong password
    if (!isValidPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password",
        },
        { status: 401 }
      );
    }

    // 200 – Success
    const token = jwt.sign(
      {
        user_id: existingUser.user_id,
        user_fullName: existingUser.user_fullName,
        user_roleId: existingUser.user_roleId,
      },
      process.env.JWT_SECRET!,
      { expiresIn: process.env.JWT_EXPIRES_IN! }
    );

    
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return response;

  } catch (error) {

    // 500 – Server error
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
};