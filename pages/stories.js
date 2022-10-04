import PortfolioCard from "../components/PortfolioCard";
import Layout from "../components/Layout";
import Head from "next/head";
import articles from "../content/portfolio/stories/articles.json";

export default function Stories() {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Reportajes</title>
      </Head>

      <Layout>
        <div className="grid grid-cols-2 gap-x-10 gap-y-16">
          {articles.map((article, index) => {
            return (
              <PortfolioCard
                key={index}
                title={article.title}
                description={article.description}
                publisher={article.publisher}
                publishDate={article.date}
                link={article.link}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}
