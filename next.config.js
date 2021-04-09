module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client - restart needed to change
    sites: {
      site1: { title: 'The 1st Site', description: 'This is the first site.' },
      site2: { title: 'The 2nd Site', description: 'This is the second site.' }
    },
    // Selecting a language is instead handled via a `pseudoLanguage` prop:
    pseudoLocales: ['en', 'se']
  },

  // We "hijack" Next.js’ i18n system to use for different sites
  i18n: {
    locales: ['site1', 'site2'],
    defaultLocale: 'site1',
    domains: [
      {
        domain: 'multi-domain-locale1.vercel.app',
        defaultLocale: 'site1'
      },
      {
        domain: 'multi-domain-locale2.vercel.app',
        defaultLocale: 'site2'
      }
    ]
  },

  // Redirect / to pseudoLocale: en
  redirects: () => (
    [
      {
        source: '/',
        destination: '/en',
        permanent: true
      }
    ]
  ),

  future: {
    webpack5: true
  }
}
