import { Theme, ThemeProviderContext } from "@/context/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
  const { setTheme, theme } = useContext(ThemeProviderContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
      case "dark":
        newTheme = "light";
        break;
      case "light":
        newTheme = "dark";
        break;

      default:
        newTheme = "light";
    }
    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return { theme: theme || "light", toggleTheme };
};

export { useTheme };
