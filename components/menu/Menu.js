import MenuLink from "./MenuLink";

const links = [
  {
    path: "/stories",
    label: "Reportajes",
  },
  {
    path: "/communication",
    label: "Comunicación",
  },
  {
    path: "/marketing",
    label: "Marketing",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/about",
    label: "Conóceme",
  },
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
