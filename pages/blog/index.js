import Head from "next/head";
import Layout from "../../components/Layout";
import client from "../../.tina/__generated__/client";
import BlogPostCard from "../../components/BlogPostCard";
import { parseDate } from "../../services/dateService";

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
                id={post.id}
                title={post.title}
                publishedAt={parseDate(post.publishedAt)}
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
  const postsListData = await client.queries.postConnection();
  return {
    props: {
      posts: postsListData.data.postConnection.edges.map((post) => ({
        id: post.node.id,
        title: post.node.title,
        publishedAt: post.node.publishedAt,
        heroImage: post.node.heroImage,
        href: `blog/${post.node._sys.filename}`,
      })),
    },
  };
}
