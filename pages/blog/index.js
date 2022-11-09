import Head from "next/head";
import Layout from "../../components/Layout";
import client from "../../.tina/__generated__/client";
import BlogPostCard from "../../components/BlogPostCard";

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Blog</title>
      </Head>

      <Layout>
        <div className="flex flex-col gap-16">
          {posts.map((post) => {
            return (
              <BlogPostCard
                key={post.id}
                title={post.title}
                publishedAt={post.publishedAt}
                heroImage={post.heroImage}
                href={post.href}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const postsListData = await client.queries.postConnection({
    sort: "publishedAt",
  });

  return {
    props: {
      posts: postsListData.data.postConnection.edges.reverse().map((post) => ({
        id: post.node.id,
        title: post.node.title,
        publishedAt: post.node.publishedAt,
        heroImage: post.node.heroImage,
        href: `blog/${post.node._sys.filename}`,
      })),
    },
  };
}
