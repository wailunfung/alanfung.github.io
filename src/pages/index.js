import React from "react";
import { graphql } from "gatsby";
import DarkLayout from "../components/layout/DarkLayout";
import SEO from "../components/seo/seo";

import { PWD, GridGallery, FeaturedSmall, FeaturedLarge, GridFour } from "../components/grid/grid";
import indexStyles from "./pages.module.scss"

const IndexPage = (props) => {
  return (
    <DarkLayout>
      <SEO
        title="Full Stack Designer"
      />
      <PWD>
        <h4 className={indexStyles.darkHeader}>Featured Projects</h4>
        <GridGallery>
          <FeaturedSmall
            link={`portfolio/deltadental`}
            image={props.data.featured1.childImageSharp.fluid}
            title="Delta Dental"
          />

          <FeaturedSmall
            link={`portfolio/firstamerican`}
            image={props.data.featured3.childImageSharp.fluid}
            title="First American"
          />

          <FeaturedLarge
            link={`portfolio/tcolv`}
            image={props.data.featured8.childImageSharp.fluid}
            title="Cosmopolitan of LV"
          />

          <FeaturedSmall
            link={`portfolio/galls`}
            image={props.data.featured4.childImageSharp.fluid}
            title="Galls"
          />

          <FeaturedSmall
            link={`portfolio/ezev`}
            image={props.data.featured2.childImageSharp.fluid}
            title="EZ EV"
          />

          <FeaturedLarge
            link={`portfolio/sony`}
            image={props.data.featured6.childImageSharp.fluid}
            title="Sony"
          />

          <FeaturedSmall
            link={`portfolio/nerium`}
            image={props.data.featured7.childImageSharp.fluid}
            title="Nerium"
          />

          <FeaturedSmall
            link={`portfolio/sva`}
            image={props.data.featured5.childImageSharp.fluid}
            title="SVA"
          />
        </GridGallery>
        <div className={indexStyles.spacer} />
        <GridFour>
          <div />
          <div />
          <div className={indexStyles.textBlock}>
            <h4 className={indexStyles.darkHeader}>Random Codepens</h4>
            <div className={indexStyles.bar} />
            <ul>
              <li><a href="https://codepen.io/wailun/pen/EJEqoQ" target="_blank" rel="noopener noreferrer">Experimental Navigation &#8599;</a></li>
              <li><a href="https://codepen.io/wailun/pen/WVKxvz" target="_blank" rel="noopener noreferrer">CSS Pageloader Animation &#8599;</a></li>
              <li><a href="https://codepen.io/wailun/pen/pOaWqZ" target="_blank" rel="noopener noreferrer">Product Slider &#8599;</a></li>
            </ul>
          </div>

          <div className={indexStyles.textBlock}>
            <h4 className={indexStyles.darkHeader}>Current Projects</h4>
            <div className={indexStyles.bar} />
            <ul>
              <li>Senior UX Designer @ Rodan + Fields</li>
              <li>Song Arrangement for Ruin</li>
            </ul>
          </div>

        </GridFour>
        <div className={indexStyles.spacer} />

      </PWD>
    </DarkLayout>
  )
}
  
export default IndexPage

export const query = graphql`
  query {
    featured1: file(relativePath: { eq: "featured1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featured2: file(relativePath: { eq: "featured2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featured3: file(relativePath: { eq: "featured3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featured4: file(relativePath: { eq: "featured4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featured5: file(relativePath: { eq: "featured5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featured6: file(relativePath: { eq: "featured6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featured7: file(relativePath: { eq: "featured7.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    featured8: file(relativePath: { eq: "featured8.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`