import type { LinksFunction } from "remix";

import homeStyles from "./index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: homeStyles }];
};

export default function Index() {
  return (
    <main className="home">
      <section className="home__intro">
        <h1>Zidane Wright</h1>
        <p>
          Software Engineer with a strong passion for lorem ipsum dolor set amet
        </p>
      </section>
    </main>
  );
}
