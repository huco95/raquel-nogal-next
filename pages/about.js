import Head from "next/head";
import Curriculum from "../components/Curriculum";
import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Conóceme</title>
      </Head>

      <Layout>
        <div className="mb-8">
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

        <Curriculum />
      </Layout>
    </>
  );
}
