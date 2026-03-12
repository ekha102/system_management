import jwt from "jsonwebtoken";

export function createRefreshToken(payload: { user_id: number }) {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: "7d",
  });
}