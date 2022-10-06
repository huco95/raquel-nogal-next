import Link from "next/link";

export default function HomeLink() {
  return (
    <Link href="/">
      <a>
        <h1 className="sm:text-3xl font-medium tracking-wider">Raquel Nogal</h1>
      </a>
    </Link>
  );
}
