import { prisma } from "@/prisma/client";

export async function isDatabaseConnected() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    return false;
  }
}
