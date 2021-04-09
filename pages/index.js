import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

export default function Home () {
  const { locale, locales, defaultLocale } = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Multi Domain using i18n</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Site: {locale}</h1>

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
