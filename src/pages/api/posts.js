import { directoryContent } from 'src/lib/getContent';

// https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210

const posts = directoryContent('posts');

export default (req, res) => {
  res.statusCode = 200;
  res.json(JSON.stringify({ posts }));
};
