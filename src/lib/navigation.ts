import { createSharedPathnamesNavigation } from "next-intl/navigation";

export type Language = "ru" | "en";
export const locales = ["en", "ru"] as Language[];
export const localePrefix = "as-needed";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
