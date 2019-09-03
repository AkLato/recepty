import React from "react"
import { Link } from "gatsby"
import { IoIosSearch } from "react-icons/io"

import Img from "gatsby-image"

import Layout from "../components/layout"
import Head from "../components/head"
import "./index.css"

const BlogPage = props => {
  return (
    <Layout>
      <Head title="Recepty" />
      <div className="container">
        <div class="searchContainer">
          <Link to="/tools" class="btn-search">
            <p>
              <IoIosSearch />
              Search
            </p>
          </Link>
        </div>

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
  }
`
