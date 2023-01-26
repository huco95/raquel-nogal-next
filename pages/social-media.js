import Head from "next/head";
import Layout from "../components/Layout";
import InstagramCard from "../components/social/InstagramCard";
import client from "../.tina/__generated__/client";

export default function SocialMedia({ posts }) {
  return (
    <>
      <Head>
        <title>Raquel Nogal - Redes sociales</title>
      </Head>

      <Layout>
        <div className="flex">
          {posts.map((post) => {
            return (
              <InstagramCard
                key={post.id}
                image={post.postImage}
                username={post.username}
                caption={post.caption}
                url={post.url}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const socialMediaListData = await client.queries.socialMediaConnection();

  return {
    props: {
      posts: socialMediaListData.data.socialMediaConnection.edges.map(
        (post) => ({
          id: post.node.id,
          postImage: post.node.postImage,
          username: post.node.username,
          caption: post.node.caption,
          url: post.node.url,
          socialNetwork: post.node.socialNetwork,
        })
      ),
    },
  };
}
