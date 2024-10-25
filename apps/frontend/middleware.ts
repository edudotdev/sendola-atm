import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("access_token");

  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET)
    );
    return NextResponse.next();
  } catch (error) {
    console.log(error, 'error')
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/balance", "/withdraw", "/transactions"],
};