import type { LinksFunction } from "remix";

import styles from "./index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export function BlogPreviewSection() {
  return <section>blog preview section</section>;
}
