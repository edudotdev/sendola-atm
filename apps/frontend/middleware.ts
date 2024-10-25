import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get("access_token")

  if (!jwt) return NextResponse.redirect(new URL("/login", request.url))

  try {
    await jwtVerify(
      jwt.value,
      new TextEncoder().encode('secret')
    )
    return NextResponse.next();
  } catch (error) {
    console.log(error, 'error')
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

export const config = {
  matcher: ["/", "/balance", "/withdraw", "/transactions"],
}
