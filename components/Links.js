import Link from "next/link";
import { useRouter } from "next/router";

function buildLink({ path, label, isActive }) {
  return (
    <Link href={path}>
      <a className={"links " + (isActive() ? "active" : "")}>{label}</a>
    </Link>
  );
}

export default function Links({ classNames }) {
  const router = useRouter();

  return (
    <ul className={classNames}>
      <li>
        {buildLink({
          path: "/stories",
          label: "Reportajes",
          isActive: () => router.pathname === "/stories",
        })}
      </li>
      <li>
        {buildLink({
          path: "/communication",
          label: "Comunicación",
          isActive: () => router.pathname === "/communication",
        })}
      </li>
      <li>
        {buildLink({
          path: "/marketing",
          label: "Marketing",
          isActive: () => router.pathname === "/marketing",
        })}
      </li>
      <li>
        {buildLink({
          path: "/blog",
          label: "Blog",
          isActive: () => router.pathname === "/blog",
        })}
      </li>
      <li>
        {buildLink({
          path: "/about",
          label: "Conóceme",
          isActive: () => router.pathname === "/about",
        })}
      </li>
    </ul>
  );
}
