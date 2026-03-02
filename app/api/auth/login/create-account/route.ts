import { ValidationCreateAccount } from "@/app/_components/ValidationCreateAccount";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // console.log("Body: ", body)
  // const { username, fullName, password } = body;

  const validation = ValidationCreateAccount.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  }
  const { username, fullName, password } = validation.data;
  const normalizedUsername = username.toLowerCase();

  const existingUser = await prisma.user.findUnique({
    where: { user_username: normalizedUsername }
  })

  if (existingUser)
    return NextResponse.json({ error: "Username already exists" }, { status: 400 })

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      user_username: normalizedUsername,
      user_fullName: fullName,
      user_password: hashedPassword,
    },
  });

  // Noted: Do not create any JWT here for the create account. After user created the account push the user login again for get JWT token. It is how it is working.

  return NextResponse.json({ success: true }, { status: 201 })






}