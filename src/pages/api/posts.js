import { directoryContent } from 'src/lib/getContent';

const posts = directoryContent('posts');

export default (req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify({ posts }));

  res.status(200).json(posts);
};
