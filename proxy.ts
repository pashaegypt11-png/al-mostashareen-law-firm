import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["ar", "en"] as const;
const DEFAULT_LOCALE = "ar";
const PUBLIC_FILE = /\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|json|txt|xml|woff2?|map)$/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const first = pathname.split("/").filter(Boolean)[0];
  const hasLocale = first && (LOCALES as readonly string[]).includes(first);

  if (pathname !== "/" && first && !(LOCALES as readonly string[]).includes(first)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url);
  }

  if (hasLocale) {
    const response = NextResponse.next();
    response.headers.set("x-locale", first as string);
    return response;
  }

  // No locale in the path → redirect to the Arabic site
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
