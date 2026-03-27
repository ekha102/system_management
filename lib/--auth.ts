import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const getUserFromToken = async () => {

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      user_id: number;
      user_fullName: string;
      user_roleId: number;
    };

    return decoded;

  } catch (error) {

    console.log("Token expired or invalid");

    return null;

  }
};
