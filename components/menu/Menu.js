import MenuLink from "./MenuLink";

const links = [
  {
    path: "/about",
    label: "Conóceme",
  },
  {
    path: "/stories",
    label: "Reportajes",
  },
  {
    path: "/communication",
    label: "Comunicación",
  },
  {
    path: "/social-media",
    label: "Redes sociales",
  },
  // {
  //   path: "/blog",
  //   label: "Blog",
  // },
];

export default function Menu({ className }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.path}>
          <MenuLink path={link.path} label={link.label} />
        </li>
      ))}
    </ul>
  );
}
