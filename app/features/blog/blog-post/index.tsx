import type { LinksFunction } from "remix";

import styles from "./index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

type Post = {
  title: string;
  readingTime: string;
  date: string;
  img: string;
};

type Props = {
  content: Post;
};

export function BlogPost({ content }: Props) {
  return (
    <article className="blog-post">
      <img className="blog-post__img" src={content.img} />
      <div className="blog-post__metadata">
        {content.date} - {content.readingTime}
      </div>
      <h1 className="blog-post__title">{content.title}</h1>
    </article>
  );
}
