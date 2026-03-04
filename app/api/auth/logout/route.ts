import { NextResponse } from "next/server";

export const POST = () => {
  try {
    // create a response object and then mutate it, rather than passing
    // the response into another json call.
    const res = NextResponse.json(
      { success: true, message: "Logged out successfully" },
      { status: 200 }
    );

    res.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(0),
      maxAge : 0,
      path: "/",
    });

    return res;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Logout failed" },
      { status: 500 }
    );
  }
};