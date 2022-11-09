import PortfolioCard from "../components/PortfolioCard";
import Layout from "../components/Layout";
import Head from "next/head";
import client from "../.tina/__generated__/client";

export default function Communication({ articles }) {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Comunicación</title>
      </Head>

      <Layout>
        <div className="flex flex-col gap-16">
          {articles.map((article) => {
            return (
              <PortfolioCard
                key={article.id}
                title={article.title}
                description={article.description}
                publisher={article.publisher}
                publishedAt={article.publishedAt}
                url={article.url}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const communicationListData = await client.queries.communicationConnection({
    sort: "publishedAt",
  });

  return {
    props: {
      articles: communicationListData.data.communicationConnection.edges
        .reverse()
        .map((article) => ({
          id: article.node.id,
          title: article.node.title,
          description: article.node.description,
          publisher: article.node.publisher,
          publishedAt: article.node.publishedAt,
          url: article.node.url,
        })),
    },
  };
}
