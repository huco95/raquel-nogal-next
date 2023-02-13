import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const title = "Raquel Nogal: marketing y comunicación";
  const description = "Raquel Nogal: marketing y comunicación";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Raquel, Nogal, Raquel Nogal, marketing, comunicacion, redes sociales, periodismo"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={process.env.WEBSITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          itemprop="image"
          content={`${process.env.WEBSITE_URL}/opengraph.png`}
        />
        <meta property="og:image:type" content="image/png" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={process.env.WEBSITE_URL} />
        <meta property="twitter:url" content={process.env.WEBSITE_URL} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`${process.env.WEBSITE_URL}/opengraph.png`}
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
