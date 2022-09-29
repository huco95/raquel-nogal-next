import StoryCard from "../components/StoryCard";
import Layout from "../components/Layout";
import stories from "../content/stories/stories.json";
import Head from "next/head";

export default function Stories() {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Reportajes</title>
      </Head>

      <Layout>
        <div className="grid grid-cols-2 gap-x-10 gap-y-16">
          {stories.map((story, index) => {
            return (
              <StoryCard
                key={index}
                title={story.title}
                description={story.description}
                publisher={story.publisher}
                publishDate={story.date}
                link={story.link}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}
