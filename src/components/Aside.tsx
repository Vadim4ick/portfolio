import { BurgerProviderContext } from "@/context/BurgerOpen";
import { useMedia } from "@/hooks/useMedia";
import { useTheme } from "@/hooks/useTheme";
import { ToggleTheme } from "@/icons/ToggleTheme";
import { Button } from "@/ui/Button";
import { motion } from "framer-motion";
import { memo, useContext } from "react";

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
        <nav>
          <ul className="flex flex-col p-5 gap-6 items-center">
            <li>
              <button className="font-bold text">Обо мне</button>
            </li>

            <li>
              <button className="font-bold text">Проекты</button>
            </li>

            <li>
              <button className="font-bold text">Контакты</button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center gap-2 pb-2">
          <Button onClick={toggleTheme}>
            <ToggleTheme className="text-icons-light dark:text-icons-dark" />
          </Button>

          <button className="text">RU</button>
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
      <nav>
        <ul className="flex flex-col p-5 gap-6 items-center">
          <li>
            <button className="font-bold text">Обо мне</button>
          </li>

          <li>
            <button className="font-bold text">Проекты</button>
          </li>

          <li>
            <button className="font-bold text">Контакты</button>
          </li>
        </ul>
      </nav>

      <div className="flex items-center justify-center gap-2 pb-2">
        <Button onClick={toggleTheme}>
          <ToggleTheme className="text-icons-light dark:text-icons-dark" />
        </Button>

        <button className="text">RU</button>
      </div>
    </motion.aside>
  );
});

export { Aside };
