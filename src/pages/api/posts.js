import { directoryContent } from 'src/lib/getContent';

const posts = directoryContent('posts');

export default (req, res) => {
  res.statusCode = 200;
  res.json(JSON.stringify({ posts }));
};
