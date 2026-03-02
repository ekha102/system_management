// app/api/auth/check-username/route.ts
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const username = request.nextUrl.searchParams.get("username");

  if (!username) {
    return NextResponse.json({ available: false });
  }

  const existingUser = await prisma.user.findUnique({
    where: { user_username: username.toLowerCase() },
  });

  return NextResponse.json({
    available: !existingUser,
  });
}