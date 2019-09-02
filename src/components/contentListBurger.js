import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./contentListBurger.css"

const ContentListBurger = () => {
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
    <ol className="postsBurger">
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <li className="postBurger">
            <Link to={`/recepty/${edge.node.fields.slug}`}>
              <p>{edge.node.frontmatter.title}</p>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default ContentListBurger
