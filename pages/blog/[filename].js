import Head from "next/head";
import { useTina } from "tinacms/dist/edit-state";
import client from "../../.tina/__generated__/client";
import BlogPost from "../../components/BlogPost";
import Layout from "../../components/Layout";
import { parseDate } from "../../services/dateService";

export default function BlogPostSlug(props) {
  const { data, isLoading } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log(data.post);

  return isLoading ? (
    <>
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <Head>
        <title>Raquel Nogal - {data.post.title}</title>
      </Head>

      <Layout>
        <BlogPost
          title={data.post.title}
          body={data.post.body}
          publishedAt={parseDate(data.post.publishedAt)}
          heroImage={data.post.heroImage}
        />
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  let data = {};
  let query = {};
  let variables = { relativePath: `${params.filename}.mdx` };
  try {
    const res = await client.queries.post(variables);
    query = res.query;
    data = res.data;
    variables = res.variables;
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      variables: variables,
      data: data,
      query: query,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData = await client.queries.postConnection();
  return {
    paths: postsListData.data.postConnection.edges.map((post) => ({
      params: { filename: post.node._sys.filename },
    })),
    fallback: false,
  };
};
