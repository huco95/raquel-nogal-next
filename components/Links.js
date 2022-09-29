import Link from "next/link";
import { useRouter } from "next/router";

export default function Links({ classNames }) {
  const router = useRouter();

  return (
    <ul className={classNames}>
      <li>
        <Link href="/stories">
          <a
            className={
              "links " + (router.pathname === "/stories" ? "active" : "")
            }
          >
            Reportajes
          </a>
        </Link>
      </li>
      <li>
        <Link href="/comunicacion">
          <a className="links">Comunicación</a>
        </Link>
      </li>
      <li>
        <Link href="/marketing">
          <a className="links">Marketing</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a className="links">Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="links">Conóceme</a>
        </Link>
      </li>
    </ul>
  );
}
