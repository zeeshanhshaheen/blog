import PostLayout from '../../components/postLayout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import ReactMarkdown from 'react-markdown';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (

        <PostLayout class="bg-blue-100">
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article class="max-w-none p-6 prose lg:prose-xl shadow-xl">
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>

                <ReactMarkdown
                    source={postData.markdown}
                />
            </article>
        </PostLayout>
    )
}