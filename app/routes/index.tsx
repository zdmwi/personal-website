import type { LinksFunction } from "remix";

import {
  Introduction,
  links as introductionStylesLink,
} from "../features/introduction";

import {
  BlogPreviewSection,
  links as blogPreviewStylesLink,
} from "../features/blog/blog-preview-section";

export const links: LinksFunction = () => {
  return [...introductionStylesLink(), ...blogPreviewStylesLink()];
};

export default function Index() {
  return (
    <main>
      <Introduction />
      <BlogPreviewSection />
    </main>
  );
}
