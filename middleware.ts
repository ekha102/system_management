import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest) {

  const token = req.cookies.get("token")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {

    jwt.verify(token, process.env.JWT_SECRET!);

    return NextResponse.next();

  } catch {

    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {

      const refresh = await fetch(
        new URL("/api/auth/refresh", req.url),
        {
          method: "POST",
          headers: {
            cookie: req.headers.get("cookie") || "",
          },
        }
      );

      if (refresh.ok) {
        return NextResponse.next();
      }

      return NextResponse.redirect(new URL("/login", req.url));

    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};