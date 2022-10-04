import "../styles/globals.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider.js";
import Head from "next/head";

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
    </TinaProvider>
  );
};

export default App;
