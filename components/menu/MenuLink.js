import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuLink({ path, label }) {
  const router = useRouter();
  return (
    <Link href={path}>
      <a
        className={
          "animated-link " + (router.pathname === path ? "active" : "")
        }
      >
        {label}
      </a>
    </Link>
  );
}
