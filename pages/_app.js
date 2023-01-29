import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const title = "Raquel Nogal: marketing y comunicación";
  const description = "Raquel Nogal: marketing y comunicación";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <!-- HTML Meta Tags --> */}
        <title>{description}</title>
        <meta name="description" content={description} />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={process.env.WEBSITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="${process.env.WEBSITE_URL}/opengraph.png"
        />
        /{/* <!-- Twitter Meta Tags --> */}
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
