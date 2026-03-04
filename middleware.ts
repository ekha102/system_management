// middleware.ts
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  /**
   * 1. Explicitly ALLOW auth APIs
   * (login must NEVER be blocked)
   */
  if (
    pathname === "/api/auth/login" ||
    pathname === "/api/auth/login/create-account" ||
    pathname === "/api/auth/logout"
  ) {
    return NextResponse.next();
  }

  /**
   * ✅ 2. Ignore all other API routes
   * (protect APIs separately if needed)
   */
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  /**
   * 🔐 3. Page protection starts here
   */
  const token = req.cookies.get("token")?.value;
  const isAuthRoute = pathname.startsWith("/login");

  if (!token) {
    if (!isAuthRoute) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);

    // Logged-in user should not see login page
    if (isAuthRoute) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  } catch {
    const res = NextResponse.redirect(new URL("/login", req.url));
    res.cookies.delete("token");
    return res;
  }
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};