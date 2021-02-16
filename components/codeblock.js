import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Highlight from "react-highlight.js";

const CodeBlock = ({ language, value }) => {
  return (
    // <SyntaxHighlighter
    //   language={language}
    //   style={tomorrow}
    //   wrapLines={true}
    //   showLineNumbers={true}
    // >
    //   {value}
    // </SyntaxHighlighter>
    /*{ <SyntaxHighlighter 
       language={language} 
       style={tomorrow} 
       wrapLines={true} 
       showLineNumbers={true}
     >
       {value}
     </SyntaxHighlighter> }*/
    <>
      <span>
        <div className="flex align-center justify-center" id="code-block">
          <div className="sm:w-10 md:w-15 w-11/12  flex justify-center align-center m-5">
            <Highlight className="" language={language}>
              {value}
            </Highlight>
          </div>
        </div>
      </span>

      {/* <style jsx>
        {`
          #code-block {
            width: 1000px;
          }

          @media only screen and (max-width: 325px) {
            #code-block {
              width: 250px;
            }
          }

          @media only screen and (max-width: 500px) {
            #code-block {
              width: 250px;
            }
          }

          @media only screen and (max-width: 768px) {
            #code-block {
              width: 200px;
            }
          }
        `}
      </style> */}
    </>
  );
};

export default CodeBlock;
