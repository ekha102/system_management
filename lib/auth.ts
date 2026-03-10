import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const getUserFromToken = () => {

  const token = cookies().get("token")?.value;


  if (!token) {
    return null;
  }

  try {
    // Get the token from username and role:
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // console.log("Decode out token: ", decoded)

    return decoded as {
      user_id: number;
      user_fullName: string;
      user_roleId: number;
    };
  } catch (error) {
    return null
  }


};