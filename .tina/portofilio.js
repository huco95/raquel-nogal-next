export function createPortfolioCollection(name, label) {
  return {
    label: label,
    name: name,
    path: `content/portfolio/${name}`,
    format: "json",
    fields: [
      {
        type: "datetime",
        label: "Fecha de publicación",
        name: "publishedAt",
        dateFormat: "DD-MM-YYYY",
        required: true,
      },
      {
        type: "string",
        label: "Publicado en",
        name: "publisher",
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
        label: "Descripción",
        name: "description",
      },
      {
        type: "string",
        label: "Enlace",
        name: "url",
        required: true,
      },
    ],
  };
}

export function createSocialMediaCollection() {
  return {
    label: "Redes Sociales",
    name: "socialMedia",
    path: `content/portfolio/social-media`,
    format: "json",
    fields: [
      {
        type: "image",
        label: "Imagen del post",
        name: "postImage",
        required: true,
      },
      {
        type: "string",
        label: "Usuario",
        name: "username",
        required: true,
      },
      {
        type: "rich-text",
        label: "Texto del post",
        name: "caption",
      },
      {
        type: "string",
        label: "Enlace del post",
        name: "url",
        required: true,
      },
      {
        type: "string",
        label: "Red social",
        name: "socialNetwork",
        required: true,
        options: [
          { label: "Instagram", value: "instagram" },
          { label: "LinkedIn", value: "linkedin" },
        ],
      },
    ],
  };
}
