import { useToggleSwitcher } from "@/hooks/useToggleSwitcher";

const ToggleSwitcher = () => {
  const { toggleLocale, locale } = useToggleSwitcher();

  return (
    <button onClick={toggleLocale} className="text">
      {locale === "ru" ? "EN" : "RU"}
    </button>
  );
};

export { ToggleSwitcher };
