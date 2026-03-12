import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { ValidationLogin } from "@/app/_components/ValidationLogin";
import { createAccessToken } from "@/lib/auth/CreateAccessToken";
import { createRefreshToken } from "@/lib/auth/createRefreshToken";

export const POST = async (request: NextRequest) => {
  try {

    // 1️⃣ Parse request body
    const body = await request.json();

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

    // Normalize username
    const normalizedUsername = user_username.toLowerCase();

    // 2️⃣ Find user
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

    // 3️⃣ Verify password
    const isValidPassword = await bcrypt.compare(
      user_password,
      existingUser.user_password
    );

    if (!isValidPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password",
        },
        { status: 401 }
      );
    }

    const { user_id, user_fullName, user_roleId } = existingUser;

    // 4️⃣ Create access token (short-lived)
    const accessToken = createAccessToken({
      user_id,
      user_fullName,
      user_roleId,
    });
    console.log("Created by the accessToken", accessToken)

    // 5️⃣ Create refresh token (long-lived)
    const refreshToken = createRefreshToken({
      user_id,
      // user_fullName,
      // user_roleId,
    });

    // 6️⃣ Store refresh token in database
    const dbcreateRefreshToken = await prisma.refreshToken.create({
      data: {
        refresh_token: refreshToken,
        refresh_userId: user_id,
        refresh_expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    console.log("Create the refresh token in db", dbcreateRefreshToken)

    // 7️⃣ Set cookies (Next.js 15 requires await cookies())
    const cookieStore = await cookies();

    cookieStore.set("token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      path: "/",
    });

    // 8️⃣ Return response
    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        user_id,
        user_fullName,
        user_roleId,
      },
    });

  } catch (error) {

    console.error("Login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      { status: 500 }
    );

  }
};

