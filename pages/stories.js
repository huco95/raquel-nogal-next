import StoryCard from "../components/StoryCard";
import Layout from "../components/Layout";
import stories from "../content/stories/stories.json";

export default function Stories() {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-10">
        {stories.map((story) => {
          return (
            <StoryCard
              title={story.title}
              description={story.description}
              publisher={story.publisher}
              publishDate={story.date}
            />
          );
        })}
      </div>
    </Layout>
  );
}
