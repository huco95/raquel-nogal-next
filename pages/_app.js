import "../styles/globals.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider.js";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
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
    </TinaProvider>
  );
};

export default App;
