import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./../../style/globals.css";
import { BurgerOpen } from "@/context/BurgerOpen";
import { ThemeProvider } from "@/context/ThemeProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";

const ubunty = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Firulev Vadim | Frontend Developer",
  description: "Портфолио, резюме",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={`${ubunty.className} bg-bg-light dark:bg-bg-dark`}>
        <BurgerOpen>
          <ThemeProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <main>{children}</main>
            </NextIntlClientProvider>
          </ThemeProvider>
        </BurgerOpen>
      </body>
    </html>
  );
}
