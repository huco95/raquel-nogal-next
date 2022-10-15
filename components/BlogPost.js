import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function BlogPost({ title, body, publishedAt, heroImage }) {
  return (
    <article>
      <div className="relative w-full h-64">
        <Image
          src={heroImage}
          layout="fill"
          objectFit="cover"
          className="rounded-lg grayscale brightness-50"
        ></Image>
        <div className="absolute bottom-0 left-1/2 flex flex-col text-center translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          <span className="text-sm italic text-gray-200">{publishedAt}</span>
        </div>
      </div>

      <div className="mt-5">
        <TinaMarkdown content={body} />
      </div>
    </article>
  );
}
