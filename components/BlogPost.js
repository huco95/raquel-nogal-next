import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { parseDate } from "../services/dateService";

export default function BlogPost({ title, body, publishedAt, heroImage }) {
  return (
    <article>
      <div className="relative w-full h-64">
        <Image
          src={heroImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg grayscale brightness-50"
        ></Image>
        <div className="absolute bottom-0 left-1/2 flex flex-col text-center translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <span className="text-sm italic text-gray-200">
            {parseDate(publishedAt)}
          </span>
        </div>
      </div>

      <div className="mt-5 post-body">
        <TinaMarkdown content={body} />
      </div>
    </article>
  );
}
