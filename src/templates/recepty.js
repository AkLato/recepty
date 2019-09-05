import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Timer from "../components/timer"
import ReceptStyles from "./recepty.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
      }
      fields {
        slug
      }
      html
    }
  }
`

const Blog = props => {
  var tags = props.data.markdownRemark.frontmatter.tags

  return (
    <Layout>
      <div className={ReceptStyles.page}>
        <Head title={props.data.markdownRemark.frontmatter.title} />
        <h3>{props.data.markdownRemark.frontmatter.title}</h3>

        <ul className={ReceptStyles.tagList}>
          {tags.map(function(tag, index) {
            return (
              <li key={index} className={ReceptStyles.recipeTags}>
                <Link to={`/tags/${tag}`}>#{tag}</Link>
              </li>
            )
          })}
        </ul>

        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        />
        <Timer />
      </div>
    </Layout>
  )
}

export default Blog
