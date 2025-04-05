import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Container } from "./Container";
import Image from "next/image";

export function Header() {
  return (
    <Container>
      <div className="mb-4 mt-4 flex flex-row items-center justify-between md:mb-4">
        <div>
          <Link href="/">
            <Image
              src="/assets/logo/travel-blog-logo-Photoroom.png"
              alt="Logo"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4 font-semibold">
          <Link href="/life">Đời sống</Link>
          <Link href="/travel">Du lịch</Link>
          <Link href="/sport">Thể thao</Link>
          <Link href="/music">Âm nhạc</Link>
          <Link href="/about">Giới thiệu</Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </Container>
  );
}
