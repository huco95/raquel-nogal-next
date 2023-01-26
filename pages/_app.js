import "../styles/globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Raquel Nogal</title>
        <meta
          name="description"
          content="Raquel Nogal: marketing y comunicación"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
