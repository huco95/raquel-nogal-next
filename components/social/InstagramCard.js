import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function InstagramCard({ image, username, caption, url }) {
  return (
    <div className="relative w-full rounded-lg shadow h-96 group md:max-w-sm">
      <Image
        priority
        src={image}
        layout="fill"
        objectFit="cover"
        className="transition-all duration-500 rounded-lg grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
      ></Image>
      <div className="absolute bottom-0 left-0 w-full px-4 py-2 mb-0 rounded-b-lg bg-slate-300 opacity-90">
        <p className="pb-1 text-sm font-bold text-gray-900">{username}</p>
        <p className="pb-1 text-sm text-gray-900 line-clamp-4">
          <TinaMarkdown content={caption} />
        </p>

        <Link href={url} target="_blank">
          <a className="flex items-center justify-end text-xs font-bold text-gray-900 hover:underline">
            <span className="pr-1">View on Instagram</span>
            <ArrowRightIcon className="w-4 h-4"></ArrowRightIcon>
          </a>
        </Link>
      </div>
    </div>
  );
}
