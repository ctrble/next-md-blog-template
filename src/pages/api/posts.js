import { directoryContent } from 'src/lib/getContent';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

const posts = directoryContent('posts', serverRuntimeConfig.PROJECT_ROOT);

export default (req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify({ posts }));

  res.status(200).json(posts);
};
