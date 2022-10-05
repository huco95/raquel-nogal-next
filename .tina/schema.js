import { defineSchema, defineConfig } from "tinacms";
import { client } from "./__generated__/client";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";
const schema = defineSchema({
  // See https://tina.io/docs/tina-cloud/connecting-site/ for more information about this config
  config: {
    token: process.env.TINA_TOKEN, // generated on app.tina.io,
    clientId: process.env.TINA_CLIENT_ID, // generated on app.tina.io
    branch,
    media: {
      tina: {
        publicFolder: "public",
        mediaRoot: "",
      },
    },
  },
  collections: [
    {
      label: "Entradas del blog",
      name: "post",
      path: "content/blog/posts",
      format: "mdx",
      ui: {
        router: ({ document }) => {
          // This can be used to add contextual editing to your site. See https://tina.io/docs/tinacms-context/#accessing-contextual-editing-from-the-cms for more information.
          return `/blog/${document._sys.filename}`;
        },
      },
      fields: [
        {
          type: "datetime",
          label: "Fecha de publicación",
          name: "publishedAt",
          dateFormat: "DD-MM-YYYY",
        },
        {
          type: "image",
          label: "Imagen de portada",
          name: "heroImage",
          parse: (filename) => `${filename}`,
          uploadDir: () => `/blog/images/`,
          previewSrc: (fullSrc) => fullSrc.replace("/public", ""),
        },
        {
          type: "string",
          label: "Título",
          name: "title",
        },
        {
          type: "rich-text",
          label: "Contenido",
          name: "body",
          isBody: true,
          templates: [
            {
              name: "PageSection",
              label: "Page Section",
              fields: [
                {
                  type: "string",
                  name: "heading",
                  label: "Heading",
                },
                {
                  type: "string",
                  name: "content",
                  label: "Content",
                  ui: {
                    component: "textarea",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

export default schema;

// Your tina config

export const tinaConfig = defineConfig({
  client,
  schema,
});
