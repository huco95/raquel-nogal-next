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
