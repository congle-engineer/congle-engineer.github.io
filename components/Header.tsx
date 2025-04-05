"use client";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Container } from "./Container";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

export function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    return pathname?.startsWith(href) || activeLink === href;
  };

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  const menuItems = [
    { href: "/life", label: "Đời sống" },
    { href: "/travel", label: "Du lịch" },
    { href: "/sport", label: "Thể thao" },
    { href: "/music", label: "Âm nhạc" },
    { href: "/about", label: "Giới thiệu" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900">
      <Container>
        <div className="mx-8 flex items-center justify-between py-4">
          {/* Logo */}
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
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={`rounded-md px-4 py-2 text-sm transition-all duration-200 sm:text-base ${
                  isActive(item.href)
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus:ring-primary-500 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="absolute left-0 right-0 z-40 bg-white/95 py-4 shadow-lg backdrop-blur-sm dark:bg-gray-900/95 md:hidden">
            <div className="flex flex-col space-y-2 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`rounded-md px-4 py-3 text-lg ${
                    isActive(item.href)
                      ? "bg-gray-200 dark:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
