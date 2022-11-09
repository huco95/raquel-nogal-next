import Link from "next/link";

export default function SocialLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="text-gray-500 hover:text-gray-400" target="_blank">
        {children}
      </a>
    </Link>
  );
}
