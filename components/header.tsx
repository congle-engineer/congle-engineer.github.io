import Link from "next/link";

export function Header() {
  return (
    <h2 className="md:tracking-tigher mb-20 mt-8 flex items-center text-2xl font-bold leading-tight tracking-tight md:text-4xl">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
    </h2>
  );
}
