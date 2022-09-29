import StoryCard from "../components/StoryCard";
import Layout from "../components/Layout";
import stories from "../content/stories/stories.json";

export default function Stories() {
  return (
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
  );
}
