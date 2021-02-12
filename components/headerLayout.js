import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function HeaderLayout({}) {
  return (
    // <div class="bg-gray-200 w-screen flex align-center justify-center">
    <>
      <div>
        {/* <header class="w-3/5 pt-4 flex align-center justify-center"> */}

        <header className="text-gray-600 body-font bg-indigo-700">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a
              href="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 no-underline	"
            >
              {/* <img
            src="/images/profile.jpg"
            class="col-start-1 max-h-24 max-w-24"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            alt="Thomas Desmond"
        /> */}
              <span className="ml-3 text-xl text-white">
                {" "}
                <span className="text-white" id="name">Thomas aka</span> TheTomBomb
              </span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center  justify-center">
              <a
                href="/"
                className="mr-5 text-white hover:text-gray-900 no-underline"
              >
                Home
              </a>{" "}
              <a
                href="https://twitter.com/ThomasJDesmond"
                className="mr-5 ml-5 text-white hover:text-gray-900 no-underline"
              >
                Twitter
              </a>
            </nav>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          a {
            text-decoration: none;
            cursor: pointer;
          }
          @media only screen and (max-width: 768px) {
            #name {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
