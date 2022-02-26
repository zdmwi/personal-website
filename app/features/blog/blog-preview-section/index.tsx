import { Link, LinksFunction } from "remix";

import { BlogPost, links as blogPostStylesLink } from "../blog-post";

import styles from "./index.css";

export const links: LinksFunction = () => {
  return [...blogPostStylesLink(), { rel: "stylesheet", href: styles }];
};

export function BlogPreviewSection() {
  let posts: any[] = [
    {
      title: "Valid Post #1",
      date: "February 26, 2022",
      readingTime: "6 minutes",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Valid Post #2",
      date: "February 26, 2022",
      readingTime: "6 minutes",
      img: "https://via.placeholder.com/150",
    },
    {
      title: "Valid Post #3",
      date: "February 26, 2022",
      readingTime: "6 minutes",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="blog-preview">
      <h1>Latest Posts</h1>
      <Link to="/blog">See the full blog →</Link>
      <div className="blog-preview__posts">
        {posts.map((post) => (
          <BlogPost key={post.title} content={post} />
        ))}
      </div>
    </section>
  );
}
