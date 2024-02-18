import { BurgerProviderContext } from "@/context/BurgerOpen";
import { useMedia } from "@/hooks/useMedia";
import { useTheme } from "@/hooks/useTheme";
import { ToggleTheme } from "@/icons/ToggleTheme";
import { asideMenu } from "@/lib/const";
import { Button } from "@/ui/Button";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { memo, useContext } from "react";
import { Navbar } from "./Navbar";
import Link from "next/link";
import { ToggleSwitcher } from "@/ui/ToggleSwitcher";

const variants = {
  open: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
  closed: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
};

const Aside = memo(() => {
  const isDesktop1280 = useMedia("(max-width: 1280px)");

  const { toggleTheme } = useTheme();

  const { open } = useContext(BurgerProviderContext);

  if (!isDesktop1280.matches) {
    return (
      <aside className="mt-5 rounded-3xl bg-white-light dark:bg-white-dark h-max">
        <Navbar />

        <div className="flex items-center justify-center gap-2 pb-2">
          <Button onClick={toggleTheme}>
            <ToggleTheme className="text-icons-light dark:text-icons-dark" />
          </Button>

          <ToggleSwitcher />
        </div>
      </aside>
    );
  }

  return (
    <motion.aside
      animate={open ? "closed" : "open"}
      variants={variants}
      transition={{ delay: open ? 0.2 : 0, duration: open ? 0.5 : 0.3 }}
      className="mt-5 xl:rounded-3xl bg-white-light dark:bg-white-dark h-max max-xl:fixed max-xl:top-[25px] max-xl:right-[25px] z-20"
    >
      <Navbar />

      <div className="flex items-center justify-center gap-2 pb-2">
        <Button onClick={toggleTheme}>
          <ToggleTheme className="text-icons-light dark:text-icons-dark" />
        </Button>

        <ToggleSwitcher />
      </div>
    </motion.aside>
  );
});

export { Aside };
