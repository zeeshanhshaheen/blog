import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Thomas aka TheTomBomb'
export const siteTitle = 'Thomas Desmond - Writer, Speaker, Content Creator'

export default function HomeLayout({ children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Thomas Desmond Sitecore Technical Evangelist Blog"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {(
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        <h2>
                            <span>
                                <Link href="/">
                                    <a>
                                        Home {' '}
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        About {' '}
                                    </a>
                                </Link>
                                <Link href="/">
                                    <a>
                                        Contact
                                </a>
                                </Link>
                            </span>
                        </h2>
                    </>
                ) }
            </header>
            <main>{children}</main>
        </div>
    )
}