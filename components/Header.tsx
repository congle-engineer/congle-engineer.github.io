import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Container } from "./Container";
import Image from "next/image";

export function Header() {
  return (
    <Container>
      <div className="mb-16 mt-8 flex flex-row items-center justify-between md:mb-12">
        <div>
          <Link href="/">
            <Image
              src="/assets/logo/travel-blog-logo-Photoroom.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </Container>
  );
}
