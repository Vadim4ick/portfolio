import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./lib/navigation";

export default createMiddleware({
  locales: locales,
  localePrefix: localePrefix,
  defaultLocale: "en",
  // A list of all locales that are supported
  // locales: ["ru", "en"],
  // // Used when no locale matches
  // defaultLocale: "ru",
  // localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ru)/:path*"],
};
