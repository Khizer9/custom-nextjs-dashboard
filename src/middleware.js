import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  // Debugging Response
  console.log("Token value:", token);

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

// Protect specific routes
export const config = {
  matcher: ["/dashboard/:path*", "/users/:path*", "/about", "/users"], // Add protected routes here
};
