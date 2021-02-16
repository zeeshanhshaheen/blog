import PostLayout from "../../components/postLayout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/codeblock";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <PostLayout>
        <Head>
          <link
            rel="stylesheet"
            href="https://highlightjs.org/static/demo/styles/railscasts.css"
          />

          <title>{postData.title}</title>
          <meta name="description" content={postData.description}></meta>
        </Head>

        <article className="max-w-none rounded-xl p-10 prose lg:prose-xl shadow-xl">
          <h1 className="text-xl">{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>

          <ReactMarkdown
            source={postData.markdown}
            renderers={{ code: CodeBlock }}
          />
        </article>
      </PostLayout>
      <style jsx>
        {`
          @media only screen and (max-width: 768px) {
            h1 {
              font-size: 30px;
            }
          }
        `}
      </style>
    </>
  );
}
