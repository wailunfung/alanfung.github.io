import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import LightLayout from "../components/layout/LightLayout";
import { PWL, BlogWrapper } from "../components/grid/grid";
import { BlogHeader } from "../components/posts/intro";
import SEO from "../components/seo/seo";

import templateStyles from "./template.module.scss";
import "../styles/pages.scss";

const shortcodes = {  } // Provide common components here

const JournalPage = ({ pageContext, children }) => {
  const { prev, next } = pageContext
  return (
    <LightLayout>
      <SEO title="Journal" />
      <PWL>
        <BlogWrapper>
          <BlogHeader
            company={pageContext.frontmatter.title}
            type={pageContext.frontmatter.date}
            intro={pageContext.frontmatter.intro}
          />
          <MDXProvider components={shortcodes}>
            {children}
          </MDXProvider>
        </BlogWrapper>
        <footer className={templateStyles.footer}>
          <div className={templateStyles.footerWrapper}>
            <div className={templateStyles.footerLeft}>
              {prev &&
                <Link className={templateStyles.footerLink} to={`/journal/${prev.fields.slug}`}>
                  <div className={templateStyles.subhead}>&larr; Newer Post</div>
                  <div className={templateStyles.dark}>{prev.frontmatter.title}</div>
                </Link>
              }
            </div>
            <div className={templateStyles.footerRight}>
              {next &&
                <Link className={templateStyles.footerLink} to={`/journal/${next.fields.slug}`}>
                  <div className={templateStyles.subhead}>Previous Post &rarr;</div>
                  <div className={templateStyles.dark}>{next.frontmatter.title}</div>
                </Link>
              }
            </div>
          </div>
        </footer>
      </PWL>
    </LightLayout>
  )
}

export default JournalPage