import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Container } from "./Container";

export function Header() {
  return (
    <Container>
      <div className="mb-16 mt-8 flex flex-row items-center justify-between md:mb-12">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </Container>
  );
}
