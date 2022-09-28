import Link from "next/link";
import Links from "./Links";

export default function Header() {
  return (
    <header className="">
      <nav className="flex items-center justify-between px-4 m-auto border-b max-w-7xl border-b-gray-200 h-28">
        <Link href="/">
          <a>
            <h1 className="text-3xl font-medium tracking-wider">
              Raquel Nogal
            </h1>
          </a>
        </Link>

        <div>
          <Links classNames="flex items-center justify-around gap-4" />
        </div>
      </nav>
    </header>
  );
}
