import PortfolioCard from "../components/PortfolioCard";
import Layout from "../components/Layout";
import Head from "next/head";
import client from "../.tina/__generated__/client";

export default function Stories({ articles }) {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Reportajes</title>
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
  const storiesListData = await client.queries.storiesConnection();

  return {
    props: {
      articles: storiesListData.data.storiesConnection.edges.map((article) => ({
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
