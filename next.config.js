module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client - restart needed to change
    sites: {
      site1: { title: 'The 1st Site', description: 'This is the first site.' },
      site2: { title: 'The 2nd Site', description: 'This is the second site.' }
    }
  },
  serverRuntimeConfig: {
    // Will only be available on the server side - restart needed to change
  },

  i18n: {
    locales: ['en', 'se', 'site1', 'site2'],
    defaultLocale: 'en',
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

  future: {
    webpack5: true
  }
}
