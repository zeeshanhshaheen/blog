import Head from 'next/head'
import HomeLayout, { siteTitle } from '../components/homeLayout'
import utilStyles from '../styles/utils.module.css'
import { getAllTopPosts as getAllPostsByCategory } from '../lib/posts'
import Link from 'next/link'

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
      <div >
        <section className={utilStyles.headingMd}>
          <p></p>
          <p class="text-3xl font-semibold">
            Welcome, from Thomas 👍
        </p>
          <br />
          <p>
            Here is where I share my tech, hobbies, and thoughts. You'll find me sharing a lot of frontend tech fun and I encourage you to check it all out.
        </p>

        </section>
        <section class="bg-white  shadow-xl p-6">
          <h2 className={utilStyles.headingLg}>📝Cool Blog Posts:</h2>
          <ul className={utilStyles.list}>
            {topPosts?.map(({ id, date, title, description }) => (
              <li class="pt-6 no-underline" key={id}>
                <Link href={`/posts/${id}`}>
                  <a class="text-black font-semibold text-lg">{title}</a>
                </Link>
                <p class="italic">{description}</p>

                <br />
              </li>
            ))}
            <li class="pt-4 underline" key="all-posts">
              <Link href={`/all-posts`}>
                <a class="text-blue-500 font-semibold text-lg">All Posts 👉</a>
              </Link>
              <br />
            </li>
          </ul>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>⛺ Hobby Posts (Mostly Camping):</h2>
          <ul className={utilStyles.list}>
            {hobbyPosts?.map(({ id, date, title }) => (
              <li class="pt-4 underline list-disc" key={id}>
                <Link href={`/posts/${id}`}>
                  <a class="text-blue-500 font-semibold text-lg">{title}</a>
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