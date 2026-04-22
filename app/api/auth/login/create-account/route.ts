import { ValidationCreateAccount } from "@/app/_components/ValidationCreateAccount";
import { prisma } from "@/prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log("Body: ", body)
  // const { username, fullName, password } = body;

  const validation = ValidationCreateAccount.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  }
  const { user_username, user_fullName, user_password } = validation.data;

  const normalizedUsername = user_username.toLowerCase();

  const existingUser = await prisma.user.findUnique({
    where: { user_username: normalizedUsername }
  })


  if (existingUser)
    return NextResponse.json({ error: "Username already exists" }, { status: 400 })

  const hashedPassword = await bcrypt.hash(user_password, 10);

  try {
    await prisma.user.create({
      data: {
        user_username: normalizedUsername,
        user_fullName: user_fullName,
        user_password: hashedPassword,
        user_status: "ACTIVE",
        user_roleId: 1, // Default role ID for new users
      }
    });

    // Noted: Do not create any JWT here for the create account. After user created the account push the user login again for get JWT token. It is how it is working.

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    // Fallback error
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

}