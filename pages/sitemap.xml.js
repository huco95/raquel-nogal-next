import client from "../.tina/__generated__/client";

function generateSiteMap(blogPosts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${process.env.WEBSITE_URL}</loc>
     </url>
     <url>
       <loc>${process.env.WEBSITE_URL}/about</loc>
     </url>
     <url>
      <loc>${process.env.WEBSITE_URL}/communication</loc>
    </url>
    <url>
      <loc>${process.env.WEBSITE_URL}/social-media</loc>
    </url>
    <url>
      <loc>${process.env.WEBSITE_URL}/stories</loc>
    </url>
    <url>
      <loc>${process.env.WEBSITE_URL}/blog</loc>
    </url>
     ${blogPosts
       .map((id) => {
         return `
       <url>
           <loc>${`${process.env.WEBSITE_URL}/blog/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const postsListData = await client.queries.postConnection();
  const blogPosts = postsListData.data.postConnection.edges.map(
    (post) => post.node._sys.filename
  );
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(blogPosts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
