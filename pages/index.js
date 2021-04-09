import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getConfig from 'next/config'

import styles from '../styles/Home.module.css'
import packageJson from '../package.json'

export default function Home () {
  const { locale, locales, defaultLocale } = useRouter()
  const { publicRuntimeConfig: { sites } } = getConfig()

  const nextLocale = locales.find(otherLocale => otherLocale !== locale)
  const nextSiteNr = locale === 'site2' ? 1 : 2

  return (
    <div className={styles.container}>
      <Head>
        <title>Multi Domain using i18n</title>
        <meta name='description' content={packageJson.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{sites[locale] ? sites[locale].title : `Site not found: '${locale}'`}</h1>
        {sites[locale] && (
          <p className={styles.description}>{sites[locale].description}</p>
        )}

        <p className={styles.description}>{packageJson.description}</p>

        <div className={styles.grid}>
          <a href={`https://multi-domain-locale${nextSiteNr}.vercel.app`} className={styles.card}>
            <h3>Domain {nextSiteNr}</h3>
            <p>Go to Domain {nextSiteNr}</p>
          </a>

          <Link href={`/site${nextSiteNr}`}>
            <a className={styles.card}>
              <h3>Site: site{nextSiteNr}</h3>
              <p>Switch site locale to 'site{nextSiteNr}'</p>
            </a>
          </Link>

          <Link href={`/${nextLocale}`}>
            <a className={styles.card}>
              <h3>Locale: {nextLocale}</h3>
              <p>Switch locale to '{nextLocale}'</p>
            </a>
          </Link>

          <div className={styles.card}>
            <h3>Locale (from useRouter)</h3>
            <p>{JSON.stringify({ locale, locales, defaultLocale }, null, 2)}</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://github.com/tomsoderlund/nextjs-multi-domain-locale'
          target='_blank'
          rel='noopener noreferrer'
        >
          Get the source code
        </a>
      </footer>
    </div>
  )
}
