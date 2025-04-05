"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Container } from "./Container";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  const isActive = (href: string) => {
    return pathname?.startsWith(href) || activeLink === href;
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900">
      <Container>
        <div className="flex flex-row items-center justify-between py-4">
          <div>
            <Link
              href="/"
              className="rounded-md focus:outline-none"
              onClick={() => handleLinkClick("/")}
            >
              <Image
                src="/assets/logo/travel-blog-logo-Photoroom.png"
                alt="Logo"
                width={60}
                height={60}
                className="transition-opacity hover:opacity-80"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-1 font-semibold">
            {[
              { href: "/life", label: "Đời sống" },
              { href: "/travel", label: "Du lịch" },
              { href: "/sport", label: "Thể thao" },
              { href: "/music", label: "Âm nhạc" },
              { href: "/about", label: "Giới thiệu" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`rounded-md px-4 py-2 transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
}
