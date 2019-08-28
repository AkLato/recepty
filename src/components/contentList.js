import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const ContentList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <ol className={headerStyles.posts}>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <li className={headerStyles.post}>
            <Link to={`/recepty/${edge.node.fields.slug}`}>
              <p>{edge.node.frontmatter.title}</p>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default ContentList
