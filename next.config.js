module.exports = {
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
