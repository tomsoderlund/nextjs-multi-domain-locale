import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getConfig from 'next/config'

import styles from '../../styles/Home.module.css'
import packageJson from '../../package.json'

export default function Home ({ pseudoLocale }) {
  const { locales, locale, defaultLocale } = useRouter()
  const { publicRuntimeConfig: { sites, pseudoLocales } } = getConfig()

  const nextLocale = pseudoLocales.find(otherLocale => otherLocale !== pseudoLocale)
  const nextSiteNr = locale === 'site2' ? 1 : 2

  return (
    <div className={styles.container}>
      <Head>
        <title>Multi Domain using i18n</title>
        <meta name='description' content={packageJson.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{sites[locale] ? sites[locale].title : `Site not found: '${locale}</strong>`}</h1>
        {sites[locale] && (
          <p className={styles.description}>{sites[locale].description}</p>
        )}

        <p className={styles.description}>{packageJson.description}</p>

        <div className={styles.grid}>
          <a href={`https://multi-domain-locale${nextSiteNr}.vercel.app/${pseudoLocale}`} className={styles.card}>
            <h3>Switch site (locale)</h3>
            <p>Currently: <strong>{locale}</strong></p>
            <p>Go to: site/domain {nextSiteNr}</p>
          </a>

          <Link href={`/${nextLocale}`}>
            <a className={styles.card}>
              <h3>Switch language (pseudoLocale)</h3>
              <p>Currently: <strong>{pseudoLocale}</strong></p>
              <p>Switch locale to: <strong>{nextLocale}</strong></p>
            </a>
          </Link>

          <div className={styles.card}>
            <h3>Props</h3>
            <p>locale (useRouter): <code>{JSON.stringify({ locales, locale, defaultLocale }, null, 2)}</code></p>
            <p>pseudoLocale: <code>{JSON.stringify({ pseudoLocales, pseudoLocale }, null, 2)}</code></p>
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

export async function getStaticProps ({ params: { pseudoLocale = 'en' }, locale = 'site1' }) {
  return {
    props: {
      pseudoLocale
    },
    revalidate: 60 // Seconds. This refresh time could be longer depending on how often data changes.
  }
}

export async function getStaticPaths ({ locales }) {
  // const paths = (await getPostsList()).map(({ slug }) => ({ params: { slug } }))
  return {
    paths: [
      { params: { pseudoLocale: 'en' }, locale: 'site1' }
    ],
    fallback: true // true -> build page if missing, false -> serve 404
  }
}
