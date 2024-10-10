import { Footer } from "components/Footer";
import { HOME_OG_IMAGE_URL } from "lib/constants";
import type { Metadata } from "next";
import { Header } from "components/Header";
import { Inter } from "next/font/google";
import cn from "classnames";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Cong Le's blog`,
  description: "Cong Le's blog built with Next.js",
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
