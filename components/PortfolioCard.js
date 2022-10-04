import Link from "next/link";

export default function PortfolioCard({
  title,
  description,
  publisher,
  publishDate,
  link,
}) {
  return (
    <div className="flex items-center p-4 border-b border-r border-gray-200">
      <article>
        <h1 className="mb-1 text-xl font-bold">{title}</h1>
        <p className="text-justify text-gray-500 dark:text-gray-300">
          {description}
        </p>

        <div className="mt-4 flex justify-between">
          <Link href={link}>
            <a
              target="_blank"
              className="text-sm text-gray-500 dark:text-gray-300 hover:underline"
            >
              Leer
            </a>
          </Link>

          <p className="text-sm italic text-gray-500 dark:text-gray-300">
            <span>{publisher}</span> · <span>{publishDate}</span>
          </p>
        </div>
      </article>
    </div>
  );
}
