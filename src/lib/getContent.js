import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const formattedDate = (date) => {
  // get day in format: Month day, Year. e.g. April 19, 2020
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export const fileContent = (directory, file) => {
  const filePath = path.resolve(`./public/content/${directory}/${file}`);

  // retrieve content from file
  const markdownWithMetadata = fs.readFileSync(filePath).toString();

  // parse markdown and format date
  const { data, content } = matter(markdownWithMetadata);
  const frontmatter = {
    ...data,
    date: formattedDate(data.date),
  };

  // use the filename as the slug and return the content
  return {
    slug: file.replace('.md', ''),
    frontmatter,
    content,
  };
};

export const directoryContent = (directory, fullPath = '') => {
  // search for the given directory, and accept an override if needed
  const directoryPath =
    fullPath === '' ? `${process.cwd()}/public/content/${directory}` : fullPath;

  // get files from content directory
  const files = fs.readdirSync(directoryPath, 'utf8');

  // retrieve content from files
  const fileContents = files
    .map((file) => fileContent(directory, file))
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return fileContents;
};

export const slugs = (directory) => {
  const filesPath = path.resolve(`./public/content/${directory}`);

  const files = fs.readdirSync(filesPath);

  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }));

  return paths;
};
