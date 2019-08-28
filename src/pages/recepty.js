import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const BlogPage = () => {
  return (
    <Layout>
      <Head title="Recepty" />
      {/* <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
            </li>
          )
        })}
      </ol> */}
      <Link to="/tags">Tagy</Link>
    </Layout>
  )
}

export default BlogPage
