import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const KEY = "spolem-podglad-1897";
const COOKIE = "spolem_preview";

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    /\.(?:png|jpg|jpeg|webp|ico|svg|css|js|woff2)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const token = searchParams.get("wejscie");
  const cookie = req.cookies.get(COOKIE)?.value;
  if (token === KEY || cookie === KEY) {
    const res = NextResponse.next();
    if (token === KEY) {
      res.cookies.set(COOKIE, KEY, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
    }
    return res;
  }

  return new NextResponse(
    `<!doctype html><html lang="pl"><head><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>Brak dostępu</title></head><body style="font-family:system-ui;display:grid;place-items:center;min-height:100vh;margin:0;background:#f7f9fc;color:#0f2748"><p>Ta strona jest na razie niepubliczna.</p></body></html>`,
    {
      status: 401,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "x-robots-tag": "noindex, nofollow",
      },
    }
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
