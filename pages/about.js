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
          <p className="mb-2">
            ¡Hola! Bienvenid@ a mi página web. Antes de que explores mis trabajos, déjame contarte un poco sobre mí:
          </p>
          <p className="mb-2">
            Soy Raquel Nogal, periodista con un profundo interés en las nuevas formas de comunicación, los asuntos internacionales y la política. Todo ello,
            hizo especializarme en temas de la Unión Europea y a sumergirme en el mundo del marketing digital y las redes sociales, siempre con un enfoque
            creativo en la comunicación digital.
          </p>
          <p className="mb-2">
            Mi curiosidad y mis ganas de aprender me han llevado a vivir experiencias profesionales en distintos países y a explorar la comunicación desde
            diversas perspectivas: agencias de comunicación y marketing, medios de comunicación, organizaciones internacionales y think tanks.
          </p>
          <p className="mb-2">
            Disfruto explorando nuevas vías para comunicar de manera efectiva y atractiva. En los últimos años, me he enfocado en la comunicación digital,
            descubriendo el potencial infinito que ofrece para conectar con audiencias de manera auténtica y significativa.
          </p>
          <p>
            Creo firmemente en el poder de la comunicación para inspirar, informar y transformar. Para mí, comunicar va más allá de simplemente transmitir
            información; es un arte que nos permite construir puentes entre personas, culturas y perspectivas. En un mundo cada vez más interconectado, la
            comunicación se convierte en una herramienta vital para construir un futuro más inclusivo, informado y empoderado.
          </p>
        </div>

        <div className="mt-8 text-center">
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

        <div className="mt-8 text-center">
          <h2 className="mb-2 text-lg font-semibold text-gray-500 dark:text-gray-300">
            Contacto
          </h2>

          <Social className="flex flex-row justify-center mt-4 gap-x-4" />
        </div>
      </Layout>
    </>
  );
}
