import { Link } from "remix";

import styles from "./index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

type MenuItem = {
  label: string;
  link: string;
};

const menuItems: MenuItem[] = [
  { label: "Blog", link: "/blog" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contacts" },
];

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        ZW
      </Link>
      <div className="navbar__links">
        {menuItems.map((item) => (
          <Link to={item.link} key={item.label} prefetch="intent">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
