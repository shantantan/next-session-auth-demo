import { NextResponse, type NextRequest } from "next/server";
import { getSession } from "@/lib/session";

export const middleware = async (request: NextRequest) => {
  const session = await getSession();

  if (!session) {
    return NextResponse.redirect(new URL("login", request.url));
  }

  // if (session と URLの文字列条件を指定すること) {
  //   return NextResponse.redirect(new URL("", request.url));
  // }

  return NextResponse.next();

  // return NextResponse.redirect(new URL("/", nextUrl));
};

export const config = {
  matcher: ["/"],
};
