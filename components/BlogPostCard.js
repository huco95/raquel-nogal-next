import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({
  id,
  title,
  publishedAt,
  heroImage,
  href,
}) {
  return (
    <Link key={id} href={href}>
      <a className="relative group h-64">
        <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          className="rounded-lg grayscale brightness-50 transition-all duration-500 group-hover:grayscale-0"
        ></Image>
        <div className="absolute bottom-5 left-5 flex flex-col">
          <p className="text-xl font-bold text-white">{title}</p>
          <span className="text-sm italic text-gray-200">{publishedAt}</span>
        </div>
      </a>
    </Link>
  );
}
