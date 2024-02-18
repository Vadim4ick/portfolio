"use client";

import { Aside } from "@/components/Aside";
import { Burger } from "@/components/Burger";
import { BurgerProviderContext } from "@/context/BurgerOpen";
import { useMedia } from "@/hooks/useMedia";
import { Button } from "@/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { useTranslations } from "next-intl";
import { MainBtns } from "@/components/MainBtns";

const variants = {
  open: { clipPath: "circle(0% at 50% 50%)" },
  closed: { clipPath: "circle(70.7% at 50% 50%)" },
};

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const isDesktop1280 = useMedia("(max-width: 1280px)");

  const { open } = useContext(BurgerProviderContext);

  const t = useTranslations("Index");

  return (
    <>
      <div className="container my-0 mx-auto px-5">
        <div className="xl:grid xl:grid-cols-main h-full 2xl:gap-10 xl:gap-2">
          {isDesktop1280.matches && <Burger />}

          <div className="flex items-center">
            <section className="flex gap-2 justify-between lg:min-h-screen items-center max-lg:flex-col-reverse">
              <div className="max-w-3xl w-full h-max">
                <h1 className="mb-4 main-title text">{t("greetings")}</h1>

                <p className="mb-7 text">{t("description")}</p>

                <MainBtns />
              </div>

              <div className="flex-grow-0 flex-shrink-0">
                <div
                  className="rounded-full absolute inset-0 z-[-1]"
                  style={{
                    background:
                      "radial-gradient(57.05% 57.05% at 49.84% 42.95%, rgba(94, 211, 243, 0.2) 0%, rgba(94, 211, 243, 0.132) 7.81%, rgba(94, 211, 243, 0.083) 29.69%, rgba(94, 211, 243, 0.0386) 56.77%, rgba(94, 211, 243, 0.0219) 77.6%, rgba(94, 211, 243, 0) 100%)",
                  }}
                ></div>

                <Image
                  priority={true}
                  placeholder={"empty"}
                  width={400}
                  height={400}
                  className="rounded-full h-[400px] w-[400px] max-lg:h-[200px] max-lg:w-[200px] object-cover object-left-top"
                  src="/vadim.png"
                  alt="my-photo"
                />
              </div>
            </section>
          </div>

          <Aside />
        </div>
      </div>

      <motion.div
        style={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={open ? "closed" : "open"}
        variants={variants}
        className="absolute top-0 left-0 w-full h-full bg-bg-dark z-10 opacity-70"
      />
    </>
  );
}
