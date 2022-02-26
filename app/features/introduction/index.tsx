import type { LinksFunction } from "remix";

import styles from "./index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export function Introduction() {
  return (
    <section className="introduction-container">
      <h1>Zidane Wright</h1>
      <p>
        Software Engineer with a strong passion for lorem ipsum dolor set amet
      </p>
    </section>
  );
}
