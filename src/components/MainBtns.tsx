import { Button } from "@/ui/Button";
import { useTranslations } from "next-intl";

const MainBtns = () => {
  const t = useTranslations("Button");

  return (
    <div className="flex gap-4">
      <Button className="bg-icons-light dark:bg-icons-dark py-2 px-2 rounded-3xl text hover:text-white-light transition-colors delay-50">
        {t("connectionBtn")}
      </Button>

      <Button className="bg-icons-light dark:bg-icons-dark py-2 px-2 rounded-3xl text hover:text-white-light transition-colors delay-50">
        {t("saveSummaryBtn")}
      </Button>
    </div>
  );
};

export { MainBtns };
