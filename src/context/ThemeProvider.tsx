"use client";

import { Preloader } from "@/ui/Preloader";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type Theme = "dark" | "light";

interface ThemeProviderContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeProviderContext = createContext(
  {} as ThemeProviderContextProps
);

const ISSERVER = typeof window === "undefined";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // После монтирования компонента мы можем прочитать тему из localStorage
  // и обновить состояние
  useEffect(() => {
    setTheme(
      (!ISSERVER && (localStorage.getItem("theme") as Theme)) || "light"
    );
    setMounted(true);
  }, []);

  // Затем мы обновляем классы темы только после монтирования компонента
  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, mounted]);

  // Не рендерим детей до монтирования компонента
  if (!mounted) {
    return <Preloader />;
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
