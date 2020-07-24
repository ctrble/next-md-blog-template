import React from "react";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";

import Test from "../components/Test";

export default function Home({ fileContents }) {
  return (
    <div>
      {fileContents.map(({ frontmatter, content }) => (
        <article key={frontmatter.title}>
          <header>
            <h3>{frontmatter.title}</h3>
            <span>{frontmatter.date}</span>
          </header>
          <section>
            <p>{frontmatter.description}</p>
          </section>
          <ReactMarkdown escapeHtml={false} source={content} />
          <Test />
        </article>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const aboutPath = "src/content/about";

  // get files
  const files = fs.readdirSync(`${process.cwd()}/${aboutPath}`);

  // retrieve content from files
  const fileContents = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${aboutPath}/${filename}`)
      .toString();

    const { data, content } = matter(markdownWithMetadata);

    // convert date to format: Month day, Year
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    // update data with the formatted date
    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    // use the filename as the slug and return the content
    return {
      slug: filename.replace(".md", ""),
      frontmatter,
      content,
    };
  });

  return {
    props: {
      fileContents,
    },
  };
}
