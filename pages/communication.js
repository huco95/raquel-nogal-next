import PortfolioCard from "../components/PortfolioCard";
import Layout from "../components/Layout";
import Head from "next/head";
import articles from "../content/portfolio/communication/articles.json";

export default function Communication() {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Comunicación</title>
      </Head>

      <Layout>
        <div className="flex flex-col gap-16">
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
