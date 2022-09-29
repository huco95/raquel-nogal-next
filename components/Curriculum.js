import Link from "next/link";

export default function Curriculum() {
  return (
    <div className="text-center">
      <h2 className="mb-2 text-lg font-semibold text-gray-600">Currículum</h2>

      <div className="flex justify-center gap-x-10">
        <Link href="/curriculum/CV_RaquelNogal_ES.pdf">
          <a
            className="flex items-center justify-center italic hover:underline gap-x-2"
            target="_blank"
          >
            Español
          </a>
        </Link>

        <Link href="/curriculum/CV_RaquelNogal_EN.pdf">
          <a
            className="flex items-center justify-center italic hover:underline gap-x-2"
            target="_blank"
          >
            Inglés
          </a>
        </Link>
      </div>
    </div>
  );
}
