import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Social from "../components/social/Social";

export default function About() {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Conóceme</title>
      </Head>

      <Layout>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="text-center mt-8">
          <h2 className="mb-2 text-lg font-semibold text-gray-500 dark:text-gray-300">
            Currículum
          </h2>

          <div className="flex justify-center gap-x-10">
            <Link href="/curriculum/CV_RaquelNogal_ES.pdf">
              <a
                className="flex items-center justify-center italic animated-link gap-x-2"
                target="_blank"
              >
                Español
              </a>
            </Link>

            <Link href="/curriculum/CV_RaquelNogal_EN.pdf">
              <a
                className="flex items-center justify-center italic animated-link gap-x-2"
                target="_blank"
              >
                Inglés
              </a>
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <h2 className="mb-2 text-lg font-semibold text-gray-500 dark:text-gray-300">
            Contacto
          </h2>

          <Social className="flex flex-row justify-center gap-x-4 mt-4" />
        </div>
      </Layout>
    </>
  );
}
