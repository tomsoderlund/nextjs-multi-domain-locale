import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import getConfig from 'next/config'

import styles from '../styles/Home.module.css'
import packageJson from '../package.json'

export default function Home () {
  const { locale, locales, defaultLocale } = useRouter()
  const { publicRuntimeConfig: { sites } } = getConfig()
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
          <div className={styles.card}>
            <h3>Locale (from useRouter)</h3>
            <p>{JSON.stringify({ locale, locales, defaultLocale }, null, 2)}</p>
          </div>

          <Link href='/se'>
            <a className={styles.card}>
              <h3>Locale: se</h3>
              <p>Switch locale to 'se'</p>
            </a>
          </Link>

          <Link href='/site2'>
            <a className={styles.card}>
              <h3>Locale: site2</h3>
              <p>Switch locale to 'site2'</p>
            </a>
          </Link>

          <a href='https://multi-domain-locale2.vercel.app' className={styles.card}>
            <h3>Domain 2</h3>
            <p>Go to Domain 2</p>
          </a>
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
