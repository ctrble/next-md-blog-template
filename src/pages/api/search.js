import FuzzySearch from 'fuzzy-search';
import path from 'path';
import { directoryContent } from 'src/lib/getContent';

// resolving the path within the API tells the build to include files in the directory
const directoryPath = path.resolve(`./public/content/posts`);
const posts = directoryContent('posts', directoryPath);

export default (req, res) => {
  const searcher = new FuzzySearch(
    posts,
    ['frontmatter.title', 'frontmatter.description'],
    {
      sort: true,
    }
  );
  const results = searcher.search(req.query.q);
  const formattedResults = JSON.stringify({ results });
  res.status(200).json(formattedResults);
};
