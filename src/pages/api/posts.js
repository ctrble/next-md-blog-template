import { directoryContent } from 'src/lib/getContent';

const posts = directoryContent('posts');

export default (req, res) => {
  res.status(200).json(JSON.stringify({ posts }));
};
