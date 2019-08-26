import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import ReceptStyles from "./recepty.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className={ReceptStyles.page}>
        <Head title={props.data.markdownRemark.frontmatter.title} />
        <h3>{props.data.markdownRemark.frontmatter.title}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default Blog
