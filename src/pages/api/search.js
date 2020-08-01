import FuzzySearch from 'fuzzy-search';
import { directoryContent } from 'src/lib/getContent';

const posts = directoryContent('posts');

export default (req, res) => {
  // const results = req.query.q
  //   ? posts.filter((post) =>
  //       post.frontmatter.title.toLowerCase().includes(req.query.q)
  //     )
  //   : [];

  const searcher = new FuzzySearch(
    posts,
    ['frontmatter.title', 'frontmatter.description'],
    {
      sort: true,
    }
  );
  const results = searcher.search(req.query.q);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ results }));
};
