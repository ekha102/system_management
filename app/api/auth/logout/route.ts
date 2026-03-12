import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest) {

  const token = req.cookies.get("token")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;

  const { pathname } = req.nextUrl;

  // Allow login page and auth APIs without auth check
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  // No access token → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verify access token
    jwt.verify(token, process.env.JWT_SECRET!);

    // Token valid → continue
    return NextResponse.next();

  } catch {

    // Access token expired → try refresh
    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {

      // Call refresh endpoint
      const refreshResponse = await fetch(
        new URL("/api/auth/refresh", req.url),
        {
          method: "POST",
          headers: {
            cookie: req.headers.get("cookie") || "",
          },
        }
      );

      if (refreshResponse.ok) {
        // Refresh succeeded → continue request
        return NextResponse.next();
      }

      // Refresh failed
      return NextResponse.redirect(new URL("/login", req.url));

    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
