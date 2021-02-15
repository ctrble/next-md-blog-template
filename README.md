[![Deployment Status](https://img.shields.io/endpoint?url=https://next-md-blog-template.vercel.app/api/deployment)](https://next-md-blog-template.vercel.app/)

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

## Browser Support

Next.js comes with [polyfills](https://nextjs.org/docs/basic-features/supported-browsers-features) and [CSS support](https://nextjs.org/docs/advanced-features/customizing-postcss-config) for IE11 and modern browsers.

Browserslist is also used to determine supported browsers and provide those settings to other tools like Babel and Autoprefixer. The rules can be updated in the `browserslist` key `package.json`, and the current settings can be easily viewed at [browsersl.ist](https://browsersl.ist/?q=%3E0.3%25%2C+not+ie+11%2C+not+dead%2C+not+op_mini+all).

## Deployment

This project is most easily deployed via [Vercel](https://vercel.com/), but should work on other platforms if they support serverless functions. You may need to install and configure additional packages if you deploy elsewhere, such as [next-on-netlify](https://github.com/FinnWoelm/next-on-netlify) if you'd prefer to use Netlify.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/ctrble/next-md-blog-template)

## Contributing

Please open a pull request.
