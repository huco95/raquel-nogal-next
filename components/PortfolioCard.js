import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { parseDate } from "../services/dateService";

export default function PortfolioCard({
  title,
  description,
  publisher,
  publishedAt,
  url,
}) {
  return (
    <Link href={url}>
      <a className="flex flex-col items-center group" target="_blank">
        <article className="w-full">
          <h1 className="mb-1 text-xl font-bold">{title}</h1>
          <p className="text-justify text-gray-500 dark:text-gray-300">
            <TinaMarkdown content={description} />
          </p>

          <div className="flex justify-end mt-4">
            <p className="text-sm italic text-gray-500 dark:text-gray-300">
              <span>{publisher}</span> · <span>{parseDate(publishedAt)}</span>
            </p>
          </div>
        </article>
        <span className="h-0.5 w-10 bg-white group-hover:w-40 transition-all mt-4"></span>
      </a>
    </Link>
  );
}
