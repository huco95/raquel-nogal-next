import Link from "next/link";

export default function SocialLink({ href, children, title }) {
  return (
    <Link href={href}>
      <a
        title={title}
        target="_blank"
        className="text-gray-500 hover:text-gray-400"
      >
        {children}
      </a>
    </Link>
  );
}
