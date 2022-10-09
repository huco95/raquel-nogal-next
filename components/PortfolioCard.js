import Link from "next/link";

export default function PortfolioCard({
  title,
  description,
  publisher,
  publishDate,
  link,
}) {
  return (
    <Link href={link}>
      <a className="flex flex-col items-center group" target="_blank">
        <article className="w-full">
          <h1 className="mb-1 text-xl font-bold">{title}</h1>
          <p className="text-justify text-gray-500 dark:text-gray-300">
            {description}
          </p>

          <div className="flex justify-end mt-4">
            <p className="text-sm italic text-gray-500 dark:text-gray-300">
              <span>{publisher}</span> · <span>{publishDate}</span>
            </p>
          </div>
        </article>
        <span className="h-0.5 w-10 bg-white group-hover:w-40 transition-all mt-4"></span>
      </a>
    </Link>
  );
}
