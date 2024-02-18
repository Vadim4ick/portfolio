import { asideMenu } from "@/lib/const";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Aside");

  return (
    <nav>
      <ul className="flex flex-col p-5 gap-6 items-center">
        {asideMenu.map((el) => (
          <li key={el}>
            <button className={"font-bold text"}>{t(el)}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
