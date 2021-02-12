import Head from "next/head";
import HomeLayout, { siteTitle } from "../components/homeLayout";
import utilStyles from "../styles/utils.module.css";
import { getAllTopPosts as getAllPostsByCategory } from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const topPosts = getAllPostsByCategory("topPost");
  const hobbyPosts = getAllPostsByCategory("hobby");

  return {
    props: {
      topPosts: topPosts,
      hobbyPosts: hobbyPosts,
    },
  };
}
export default function Home({ topPosts, hobbyPosts }) {
  return (
    <>
      <HomeLayout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div>
          <section className="ml-20 pt-5 info pb-5" id="info">
            <div className="container mx-auto px-2 py-8">
              <div className="lg:flex ">
                <div className="lg:w-1/2">
                  <h2 className="text-black  dark:text-gray-100 text-3xl font-bold">
                    Welcome, from <span className="italic">Thomas</span> 👍
                  </h2>
                  <br />
                  <p className="text-white mb-10">
                    Here is where I share my tech, hobbies, and thoughts. You'll
                    find me sharing a lot of frontend tech fun and I encourage
                    you to check it all out.
                  </p>
                </div>
                <div className="mt-10 ml-20 lg:mt-0 " id="info-img">
                  <div className="flex items-center justify-center lg:justify-end">
                    <div className="max-w-lg">
                      <img
                        className="w-full h-54 object-cover object-center rounded-xl shadow "
                        style={{
                          borderRadius: "50%",
                          width: "50%",
                        }}
                        src="/profile1.png"
                        alt=""
                        id="set-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="bg-white rounded-xl	 shadow-xl p-6 lex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="text-center mb-10">
              <h1 class="sm:text-3xl text-xl font-medium title-font text-gray-900 mb-4">
                📝Cool Blog Posts:
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                I like to write Tech articles so that others can learn from it.
                It really enjoy when I am writing these articles.
              </p>

              <div class="flex mt-2 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
            </div>
            <ul className="p-1">
              {topPosts?.map(({ id, date, title, description }) => (
                <li class="pt-6 no-underline" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a class="text-black font-semibold text-lg title-font font-medium mb-3 underline">
                      {title}
                    </a>
                  </Link>
                  <p class="italic">{description}</p>
                  <Link href={`/posts/${id}`}>Read More...</Link>

                  <br />
                </li>
              ))}
              <li class="pt-4 no-underline" key="all-posts">
                <a href={`/all-posts`}>
                  <a class="text-indigo-600 font-semibold text-lg">
                    View all articles 👉
                  </a>
                </a>
                <br />
              </li>
            </ul>
          </section>

          <section className="mt-20 mb-20">
            <section class="bg-gray-200 rounded-xl	 shadow-xl p-6 lex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class="text-center mb-10">
                <h1 class="sm:text-3xl text-xl font-medium title-font text-gray-900 mb-4">
                  👨‍🏫 My Courses:
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                My cool courses hosted on Thinkster.io
              </p>

              <div class="flex mt-2 justify-center">
                <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
              </div>
                <div className="inline">
                  <div className="pt-4">
                  <Link href="https://thinkster.io/tutorials/building-a-crud-application-with-angular-asp-net-core-course-introduction">
                    <a class="text-black font-semibold text-lg title-font font-medium mb-3 underline">
                      Building a CRUD Application with Angular & ASP.Net Core
                    </a>
                  </Link>
                  </div>
                  <div className="pt-4">
                  <Link href="https://thinkster.io/tutorials/creating-a-c-asp-net-core-api-introduction">
                    <a class="text-black font-semibold text-lg title-font font-medium mb-3 underline">
                      Creating a C# ASP.Net Core API
                    </a>
                  </Link>
                  </div>
                </div>
              </div>
            </section>

            <h2 className="text-white text-2xl pt-8">
              ⛺ Hobby Posts (Mostly Camping):
            </h2>
            <ul className="p-5">
              {hobbyPosts?.map(({ id, date, title }) => (
                <li class="pt-4 underline list-disc" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a class="text-white font-semibold text-lg">{title}</a>
                  </Link>
                  <br />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </HomeLayout>
      <style>
        {`


      @media only screen and (max-width: 768px) {

        #info-img {
          margin-left: 50px
        }

        #info {
          margin-left: 0;
        }

        .info {
          padding-top: 0px;
        }

        #set-image {
         width: 50%
          
        }

        #info-img {
          margin-bottom: 10px
        }
        
      }
    
    `}
      </style>
    </>
  );
}
