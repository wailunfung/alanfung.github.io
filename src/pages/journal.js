import React from "react";
import { graphql } from "gatsby";
import LightLayout from "../components/layout/LightLayout";
import SEO from "../components/seo";
import { PWL, GridFour, BlogCard } from "../components/grid/grid";

const JournalPage = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <LightLayout>
      <SEO title="Journal" />
      <PWL>
        <h4>Journal Entries</h4>
        <GridFour>
          {posts.map(({ node: post }) => (
            <article key={post.id}>
            <BlogCard
              link={`journal/${post.fields.slug}`}
              image={post.frontmatter.featuredImage.childImageSharp.fluid}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
            />
            </article>
          ))}
        </GridFour>
      </PWL>
    </LightLayout>
  )
}

export const pageQuery = graphql`
  query blogPage {
    allMdx (
      filter: {
        fields: {
          sourceInstanceName: {eq: "journal"}
        }
      }
      sort: {
        fields: [frontmatter___date], order: DESC
      }
    ){
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1600) {
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

export default JournalPage