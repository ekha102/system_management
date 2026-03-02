import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // console.log("Body", body)
  const { username, password } = body;
  const normalizedUsername = username.toLowerCase();

  if (!username || !password)
    return NextResponse.json({ error: "Username and password are required" }, { status: 400 })

  const existingUser = await prisma.user.findUnique({
    where: { user_username: normalizedUsername },
  });

  // console.log("existingUser", existingUser)
  if (!existingUser)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })

  const isValid = await bcrypt.compare(
    password,
    existingUser.user_password
  );

  if (!isValid) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  // Added the JWT:
  const token = jwt.sign(
    {
      user_id: existingUser.user_id,
      role: existingUser.use_role,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  );

  // console.log("Token: ", token)

  const res = NextResponse.json({ success: true });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
  // console.log("Cookie set: token =", token);

  return res;

  // return NextResponse.json({
  //   message: "Login successful",
  //   user: {
  //     id: existingUser.user_id,
  //     username: existingUser.user_username,
  //     role: existingUser.use_role,
  //   },
  // });

}