import { defineSchema, defineConfig } from "tinacms";
import { createPortfolioCollection } from "./portofilio";
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
        mediaRoot: "images",
      },
    },
  },
  collections: [
    createPortfolioCollection("stories", "Reportajes"),
    createPortfolioCollection("communication", "Comunicación"),
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
      defaultItem: () => ({
        publishedAt: new Date(),
      }),
      fields: [
        {
          type: "datetime",
          label: "Fecha de publicación",
          name: "publishedAt",
          dateFormat: "DD-MM-YYYY",
          required: true,
        },
        {
          type: "image",
          label: "Imagen de portada",
          name: "heroImage",
          required: true,
        },
        {
          type: "string",
          label: "Título",
          name: "title",
          required: true,
        },
        {
          type: "rich-text",
          label: "Contenido",
          name: "body",
          required: true,
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
