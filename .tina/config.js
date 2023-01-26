import { defineConfig } from "tinacms";
import {
  createPortfolioCollection,
  createSocialMediaCollection,
} from "./portofilio";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_TOKEN, // Get this from tina.io
  token: process.env.TINA_CLIENT_ID, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      createPortfolioCollection("stories", "Reportajes"),
      createPortfolioCollection("communication", "Comunicación"),
      createSocialMediaCollection(),
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
  },
});
