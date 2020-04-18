import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import DarkLayout from "../components/layout/DarkLayout";
import { PWD, GridTwo, ImageContainer } from "../components/grid/grid";
import { PortfolioHeader } from "../components/posts/intro";
import SEO from "../components/seo/seo";

import templateStyles from "./template.module.scss";
import "../styles/pages.scss";

const shortcodes = { GridTwo, ImageContainer } // Provide common components here

const ProjectPage = ({ pageContext, children }) => {
  const { prev, next } = pageContext
  return (
    <DarkLayout>
      <SEO 
        title={pageContext.frontmatter.company}
        image={pageContext.image}
        description={pageContext.frontmatter.intro}
      />
      <PWD>
        <PortfolioHeader 
          company={pageContext.frontmatter.company}
          role={pageContext.frontmatter.role}
          type={pageContext.frontmatter.type}
          intro={pageContext.frontmatter.intro}
        />
        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
        <footer className={templateStyles.footer}>
          <div className={templateStyles.footerWrapper}>
            <div className={templateStyles.footerLeft} >
              {prev &&
                <Link className={templateStyles.footerLink} to={`/portfolio/${prev.fields.slug}`}>
                  <div className={templateStyles.subhead}>&larr; Previous Project</div>
                  <div className={templateStyles.light}>{prev.frontmatter.company}</div>
                </Link>
              }
            </div>
            <div className={templateStyles.footerRight}>
              {next &&
                <Link className={templateStyles.footerLink} to={`/portfolio/${next.fields.slug}`}>
                  <div className={templateStyles.subhead}>Next Project &rarr;</div>
                  <div className={templateStyles.light}>{next.frontmatter.company}</div>
                </Link>
              }
            </div>
          </div>
        </footer>
      </PWD>
    </DarkLayout>
  )
}

export default ProjectPage