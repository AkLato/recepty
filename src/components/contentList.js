import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Scrollbars } from "react-custom-scrollbars"

import "./contentList.css"

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
    <ol className="posts">
      <Scrollbars>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className="post">
              <Link to={`/recepty/${edge.node.fields.slug}`}>
                <p>{edge.node.frontmatter.title}</p>
              </Link>
            </li>
          )
        })}
      </Scrollbars>
    </ol>
  )
}

export default ContentList
