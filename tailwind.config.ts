import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      bg: {
        light: "#e2eef1", // цвет для светлой темы
        dark: "#0c1214", // цвет для темной темы
      },
      accent: {
        light: "#00c8ff", // цвет для светлой темы
        dark: "#5ed3f3", // цвет для темной темы
      },
      text: {
        light: "#141c1f", // цвет для светлой темы
        dark: "#dbdbdb", // цвет для темной темы
      },
      white: {
        light: "#ffffff",
        dark: "#090f11",
      },
      icons: {
        light: "#5ed3f3",
        dark: "#74a2b2",
      },
    },
    extend: {
      gridTemplateColumns: {
        main: "1.7fr 0.3fr",
      },
    },
  },
  plugins: [],
};
export default config;
