
import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST() {
  try {

    // 1️⃣ Get cookies (Next.js 15 requires await)
    const cookieStore = await cookies();

    const refreshToken = cookieStore.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { success: false, error: "No refresh token provided" },
        { status: 401 }
      );
    }

    // 2️⃣ Verify refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!
    ) as { user_id: number };

    console.log("Testing: Decoded refresh token:", decoded);

    // 4️⃣ Load user from database
    const user = await prisma.user.findUnique({
      where: { user_id: decoded.user_id }
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    // 5️⃣ Create new access token with full payload
    const newAccessToken = jwt.sign(
      {
        user_id: user.user_id,
        user_fullName: user.user_fullName,
        user_roleId: user.user_roleId
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );


    // const accessToken = createAccessToken({
    //       user_id,
    //       user_fullName,


    // 5️⃣ Update access token cookie
    cookieStore.set("token", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/"
    });

    // 6️⃣ Return success
    return NextResponse.json({
      success: true,
      message: "Access token refreshed"
    });

  } catch (error) {

    console.error("Refresh token error:", error);

    return NextResponse.json(
      { success: false, error: "Invalid or expired refresh token" },
      { status: 403 }
    );

  }
}

