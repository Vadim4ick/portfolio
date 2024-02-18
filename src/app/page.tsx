"use client";

import { Aside } from "@/components/Aside";
import { Burger } from "@/components/Burger";
import { BurgerProviderContext } from "@/context/BurgerOpen";
import { useMedia } from "@/hooks/useMedia";
import { Button } from "@/ui/Button";
import { Preloader } from "@/ui/Preloader";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";

const variants = {
  open: { clipPath: "circle(0% at 50% 50%)" },
  closed: { clipPath: "circle(70.7% at 50% 50%)" },
};

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const isDesktop1280 = useMedia("(max-width: 1280px)");

  const { open } = useContext(BurgerProviderContext);

  return (
    <>
      <div className="container my-0 mx-auto px-5">
        <div className="xl:grid xl:grid-cols-main h-full 2xl:gap-10 xl:gap-2">
          {isDesktop1280.matches && <Burger />}

          <div className="flex items-center">
            <section className="flex gap-2 justify-between lg:min-h-screen items-center max-lg:flex-col-reverse">
              <div className="max-w-3xl w-full h-max">
                <h1 className="mb-4 main-title text">
                  Привет!) Я Вадим, Frontend разработчик
                </h1>

                <p className="mb-7 text">
                  Я работаю в области веб-разработки более 4 лет. За это время я
                  создал более 100+ различных сайтов разной сложности. И успел
                  целый год проработать в коммерческой компании, в комадной
                  разработке. На данный момент я живу в прекрасном, солнечном
                  городе Батуми (Грузия), в свободное время люблю проводить
                  время с семьей и друзьями, а так же выбираться для
                  "перезагрузки" в походы по горам. Так же по-мимо опыта в
                  frontend разработке у меня есть преподовательский стаж, я
                  обучал и подготавливал junior-разработчиков к первым заказам.
                </p>

                <div className="flex gap-4">
                  <Button className="bg-icons-light dark:bg-icons-dark py-2 px-2 rounded-3xl text hover:text-white-light transition-colors delay-50">
                    Связаться со мной
                  </Button>

                  <Button className="bg-icons-light dark:bg-icons-dark py-2 px-2 rounded-3xl text hover:text-white-light transition-colors delay-50">
                    Скачать резюме
                  </Button>
                </div>
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
