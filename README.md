# multi-domain-locale

This is an example of hosting multiple domains with SSG using [Next.js’ i18n system](https://nextjs.org/docs/advanced-features/i18n-routing).

## Demo

https://multi-domain-locale1.vercel.app/

## Concept

- Next.js’ i18n system `locales` is used for different _sites_.
- Selecting a _language_ is instead handled via a `pseudoLanguage` prop.

See `next.config.js` for setup.
