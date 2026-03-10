import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"; import jwt from "jsonwebtoken";
import { ValidationLogin } from "@/app/_components/ValidationLogin";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    // Validated the user input from account
    const validation = ValidationLogin.safeParse(body);

    // 400 – Invalid input then return to user status 400
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

    // Desctructuring the validation data
    const { user_username, user_password } = validation.data;
    const normalizedUsername = user_username.toLowerCase();

    // Checking the user is existed in db:
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


    // compare the user pwd send in and compare with db:
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
    // Destructuring the existingUser
    const {user_id, user_fullName, user_roleId} = existingUser;
    // 200 – Success
    const token = jwt.sign(
      {
        user_id,
        user_fullName,
        user_roleId,
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