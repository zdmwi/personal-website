import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import rootStyles from "./root.css";

import {
  Navbar,
  links as navbarStylesLink,
} from "./features/navigation/navbar";

export const meta: MetaFunction = () => {
  return { title: "Zidane Wright" };
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: rootStyles }, ...navbarStylesLink()];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
