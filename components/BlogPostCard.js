import Image from "next/image";
import Link from "next/link";
import { parseDate } from "../services/dateService";

export default function BlogPostCard({ title, publishedAt, heroImage, href }) {
  return (
    <Link href={href}>
      <a className="relative h-64 rounded-lg shadow group">
        <Image
          priority
          src={heroImage}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-500 rounded-lg grayscale brightness-50 group-hover:grayscale-0"
        ></Image>
        <div className="absolute flex flex-col bottom-5 left-5">
          <p className="text-xl font-bold text-white">{title}</p>
          <span className="text-sm italic text-gray-200">
            {parseDate(publishedAt)}
          </span>
        </div>
      </a>
    </Link>
  );
}
