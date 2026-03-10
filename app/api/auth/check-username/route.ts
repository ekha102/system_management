// app/api/auth/check-username/route.ts
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {

  
  const { searchParams } = new URL(request.url);
  const checkUsername = searchParams.get("checkUsername");
  // console.log("BE username: ", checkUsername);

  // Validation for username is not empty or no value
  if (!checkUsername)
    return NextResponse.json({ error: "Username is required" }, { status: 400 });

  try {
    // Checking with db the user is existed or not
    const existingUsername = await prisma.user.findUnique({
      where: { user_username: checkUsername.toLowerCase() },
    });
    
    // return to user response:
    return NextResponse.json({ available: Boolean(existingUsername) }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Unable to check username availability" },{ status: 500 });
  }


}