import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.cookies);

  const leadMeToken = request.cookies.get("LeadMeToken")?.value;

  if (leadMeToken) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/home/:path*",
};
