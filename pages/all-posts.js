import Head from 'next/head'
import HomeLayout, { siteTitle } from '../components/homeLayout'
import utilStyles from '../styles/utils.module.css'
import { getAllTopPosts as getAllPostsByCategory } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPosts = getAllPostsByCategory("all")

  return {
    props: {
      allPosts: allPosts,
    }
  }
}
export default function Home({ allPosts }) {
  return (
    <HomeLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div >
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>📝All Blog Posts:</h2>
          <ul className={utilStyles.list}>
            {allPosts?.map(({ id, date, title }) => (
              <li class="pt-4 underline " key={id}>
                <Link href={`/posts/${id}`}>
                  <a class="text-blue-500 font-semibold">{title}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </HomeLayout>
  )
}