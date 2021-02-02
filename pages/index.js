import Head from 'next/head'
import HomeLayout, { siteTitle } from '../components/homeLayout'
import utilStyles from '../styles/utils.module.css'
import { getAllTopPosts as getAllPostsByCategory } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const topPosts = getAllPostsByCategory("topPost")
  const hobbyPosts = getAllPostsByCategory("hobby")

  return {
    props: {
      topPosts: topPosts,
      hobbyPosts: hobbyPosts
    }
  }
}
export default function Home({ topPosts, hobbyPosts }) {
  return (
    <HomeLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📝Cool Blog Posts:</h2>
        <ul className={utilStyles.list}>
          {topPosts?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>⛺ Hobby Posts (Mostly Camping):</h2>
        <ul className={utilStyles.list}>
          {hobbyPosts?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </HomeLayout>
  )
}