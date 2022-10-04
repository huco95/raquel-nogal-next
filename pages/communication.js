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
