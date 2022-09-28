export default function StoryCard({
  title,
  description,
  publisher,
  publishDate,
  link,
}) {
  return (
    <div className="flex items-center p-4 border border-gray-200 rounded shadow">
      <article class="">
        <h1 class="text-xl font-bold mb-1">{title}</h1>
        <p className="mb-4 text-justify text-gray-500">{description}</p>

        <p className="text-sm italic text-right text-gray-500">
          <span>{publisher}</span> · <span>{publishDate}</span>
        </p>
      </article>
    </div>
  );
}
