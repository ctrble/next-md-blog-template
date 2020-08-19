# NextJS Starter Blog Template with Markdown Files

This is a basic blog template that includes:

- Next.js app using SSR, API routes, and persistent layouts
- SCSS modules and variable fonts
- Content sourced from Markdown files
- Search

Test the [demo](https://next-md-blog-template.vercel.app/) out for yourself.

## Getting Started

You can start a new repo by using this as a [template](https://github.com/ctrble/next-md-blog-template/generate).

Requires: `yarn`, `node`.

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development

Blog posts are stored in `./public/content/posts`. Blog posts should follow this format, with the filename used as the post's slug:

```markdown
---
title: Blog Post Title
description: A description of the blog post
date: year-month-day
---

Blog post body.
```

Other site content is in `./public/content/about` and follows the same format as posts.

Retrieving and parsing the site content is done with `./src/lib/getContent.js`.

## Deployment

This project is most easily deployed via [Vercel](https://vercel.com/), but should work on other platforms if they support serverless functions. You may need to install and configure additional packages if you deploy elsewhere, such as [next-on-netlify](https://github.com/FinnWoelm/next-on-netlify) if you'd prefer to use Netlify.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/ctrble/next-md-blog-template)

## Contributing

Please open a pull request.
