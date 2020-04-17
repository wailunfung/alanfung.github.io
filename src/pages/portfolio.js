import React from "react";
import { graphql } from "gatsby";
import DarkLayout from "../components/layout/DarkLayout";
import SEO from "../components/seo/seo";
import { PWD, GridAuto, PortfolioCard } from "../components/grid/grid";

import portfolioStyles from "./pages.module.scss";

const PortfolioPage = ({ data }) => {
  const { edges: portfolios } = data.allMdx
  return (
    <DarkLayout>
      <SEO title="Portfolio" />
      <PWD>
        <h4 className={portfolioStyles.darkHeader}>All Portfolio Work</h4>
        <GridAuto>
          {portfolios.map(({ node: portfolio }) => (
            <article key={portfolio.id}>
            <PortfolioCard
              link={`portfolio/${portfolio.fields.slug}`}
              image={portfolio.frontmatter.featuredImage.childImageSharp.fluid}
              company={portfolio.frontmatter.company}
              type={portfolio.frontmatter.type}
            />
            </article>
          ))}
        </GridAuto>
      </PWD>
    </DarkLayout>
  )
}

export const pageQuery = graphql`
  query PortfolioPage {
    allMdx (
      filter: {
        fields: {
          sourceInstanceName: {eq: "portfolio"}
        }
      }
      sort: {
        fields: [frontmatter___company], order: ASC
      }
    ){
      edges {
        node {
          id
          frontmatter {
            company
            role
            type
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1600, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default PortfolioPage