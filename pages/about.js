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
            Graduada en el grado de Periodismo por la Universidad Complutense de
            Madrid y cuento con un Máster en Marketing Digital de la misma
            universidad. Actualmente compagino la beca Schuman de comunicación
            en la DG de Comunicación del Parlamento Europeo con el estudio del
            Máster en Unión Europea en el Instituto Europeo de Bilbao.
          </p>
          <p className="mb-2">
            Mi experiencia se centra en medios de comunicación y en agencias de
            comunicación y marketing donde, gracias a mis conocimientos de
            idiomas, he podido obtener experiencia internacional.
          </p>
          <p>
            Soy una persona comprometida, observadora y curiosa, algo que me ha
            ayudado a crecer en un mundo tan cambiante y creativo como es el de
            la comunicación.
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
