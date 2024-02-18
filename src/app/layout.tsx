import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { BurgerOpen } from "@/context/BurgerOpen";
import { ThemeProvider } from "@/context/ThemeProvider";
import { ProviderMedia } from "@/context/ProviderMedia";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubunty.className} bg-bg-light dark:bg-bg-dark`}>
        <BurgerOpen>
          <ThemeProvider>
            <main>{children}</main>
          </ThemeProvider>
        </BurgerOpen>
      </body>
    </html>
  );
}
