# nextjs-multi-domain-locale

> Multiple domains and languages on the same Next.js site

This is an example of hosting **multiple domains on the same Next.js site** (while maintaining **multiple languages** and [static site generation (SSG)](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)), using [Next.js’ i18n system](https://nextjs.org/docs/advanced-features/i18n-routing).

## Demo

[https://multi-domain-locale1.vercel.app/](https://multi-domain-locale1.vercel.app/)

## Concept

- Next.js’ i18n `locale` is used to determine the _site_.
- Selecting a _language_ is instead handled via a `pseudoLocale` prop (pages in a `/[pseudoLocale]` folder).
- A _redirect_ from `/` to `/en`.

See `next.config.js` for setup.
