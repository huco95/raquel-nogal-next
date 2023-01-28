import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Raquel Nogal: marketing y comunicación</title>
        <meta
          name="description"
          content="Raquel Nogal: marketing y comunicación"
        />
        {/* <!-- HTML Meta Tags --> */}
        <title>Raquel Nogal: marketing y comunicación</title>
        <meta
          name="description"
          content="Raquel Nogal: marketing y comunicación"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://raquel-nogal.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Raquel Nogal: marketing y comunicación"
        />
        <meta
          property="og:description"
          content="Raquel Nogal: marketing y comunicación"
        />
        <meta
          property="og:image"
          content="https://raquel-nogal.vercel.app/opengraph.png"
        />
        /{/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="raquel-nogal.vercel.app" />
        <meta
          property="twitter:url"
          content="https://raquel-nogal.vercel.app"
        />
        <meta
          name="twitter:title"
          content="Raquel Nogal: marketing y comunicación"
        />
        <meta
          name="twitter:description"
          content="Raquel Nogal: marketing y comunicación"
        />
        <meta
          name="twitter:image"
          content="https://raquel-nogal.vercel.app/opengraph.png"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
