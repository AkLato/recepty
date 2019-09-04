import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"
import SearchAccordion from "../components/searchAccordion"
import "./index.css"

const BlogPage = props => {
  return (
    <Layout>
      <Head title="Recepty" />
      <div className="indexContainer">
        <SearchAccordion />

        <div className="grid-container">
          <Link to="tags/pecene">
            <Img
              className="images"
              fluid={props.data.imageOne.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Pečené</h4>
            </div>
          </Link>
          <Link to="tags/kureci">
            <Img
              className="images"
              fluid={props.data.imageTwo.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Kuřecí</h4>
            </div>
          </Link>
          <Link to="tags/testoviny">
            <Img
              className="images"
              fluid={props.data.imageThree.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Těstoviny</h4>
            </div>
          </Link>
          <Link to="tags/brambory">
            <Img
              className="images"
              fluid={props.data.imageSeven.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Brambory</h4>
            </div>
          </Link>
          <Link to="tags/syr">
            <Img
              className="images"
              fluid={props.data.imageEight.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Sýr</h4>
            </div>
          </Link>
          <Link to="tags/smazene">
            <Img
              className="images"
              fluid={props.data.imageNine.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Smažené</h4>
            </div>
          </Link>
          <Link to="tags/zdrave">
            <Img
              className="images"
              fluid={props.data.imageFour.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Zdravé</h4>
            </div>
          </Link>
          <Link to="tags/sladke">
            <Img
              className="images"
              fluid={props.data.imageFive.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Sladké</h4>
            </div>
          </Link>
          <Link to="tags/">
            <Img
              className="images"
              fluid={props.data.imageSix.childImageSharp.fluid}
            />
            <div className="tags">
              <h4>Více kategorií</h4>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "posts/gatsby/images/one.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "posts/gatsby/images/two.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "posts/gatsby/images/three.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "posts/gatsby/images/four.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "posts/gatsby/images/five.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "posts/gatsby/images/six.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeven: file(relativePath: { eq: "posts/gatsby/images/seven.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEight: file(relativePath: { eq: "posts/gatsby/images/eight.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNine: file(relativePath: { eq: "posts/gatsby/images/nine.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
