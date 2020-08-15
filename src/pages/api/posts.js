import path from 'path';
import { directoryContent } from 'src/lib/getContent';

const directoryPath = path.resolve(`./public/content/posts`);

const posts = directoryContent('posts');

export default (req, res) => {
  res.status(200).json(posts);
};
