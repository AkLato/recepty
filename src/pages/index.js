import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import indexStyles from "./index.module.scss"
import Head from "../components/head"

const IndexPage = props => {
  return (
    <Link to="/recepty">
      <Head title="" />
      <div className={indexStyles.background} />
      <div className={indexStyles.flex}>
        <Link to="recepty/BananovePlacky">
          <Img
            className={indexStyles.images}
            fluid={props.data.imageOne.childImageSharp.fluid}
          />
        </Link>
        <Link to="recepty/BananovePlacky">
          <Img
            className={indexStyles.images}
            fluid={props.data.imageTwo.childImageSharp.fluid}
          />
        </Link>
        <Link to="recepty/BananovePlacky">
          <Img
            className={indexStyles.images}
            fluid={props.data.imageThree.childImageSharp.fluid}
          />
        </Link>
      </div>
      <div className={indexStyles.center}>
        <h1 className={indexStyles.fade}>
          <u>Recepty</u>
        </h1>
        <br />
        <br />
        <h4 className={indexStyles.fade}>Click anywhere to explore recipes</h4>
      </div>
    </Link>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "posts/gatsby/images/four.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "posts/gatsby/images/five.jpg" }) {
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
  }
`
