import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const pathname = req.nextUrl.pathname;
  const isLoggedIn = !!req.auth;

  const isPublicRoute =
    pathname === "/login" ||
    pathname === "/login/create-account";

  const isAuthApi = pathname.startsWith("/api/auth");

  if (isLoggedIn && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!isLoggedIn && !isPublicRoute && !isAuthApi) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
