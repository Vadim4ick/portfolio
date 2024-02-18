import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./lib/navigation";

export default createMiddleware({
  locales: locales,
  localePrefix: localePrefix,
  defaultLocale: "en",

  // defaultLocale: "ru",
  // localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ru)/:path*"],
};
