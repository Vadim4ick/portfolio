import { Language } from "@/lib/navigation";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const useToggleSwitcher = () => {
  const locale = useLocale() as Language;

  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: Language) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;

    return router.push(segments.join("/"));
  };

  const toggleLocale = () => {
    let lang: Language;

    switch (locale) {
      case "ru":
        lang = "en";
        break;
      case "en":
        lang = "ru";
        break;
    }

    redirectedPathName(lang);
  };

  return { toggleLocale, locale };
};

export { useToggleSwitcher };
