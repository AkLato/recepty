import React from "react"
import PropTypes from "prop-types"
import "./tempTags.css"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout>
      <div className="tagContainerTemp">
        <div>
          <Link className="linkHomeTemp" to="/">
            <u>Domů</u>
          </Link>
          <h1>{tagHeader}</h1>
          <Link className="linkTemp" to="/tags/">
            <u>Všechny tagy</u>
          </Link>

          <ul className="tagGrid">
            {edges.map(({ node }) => {
              const { slug } = node.fields
              const { title } = node.frontmatter
              return (
                <Link className="linkTemp" to={`/recepty/${slug}`}>
                  <li className="items" key={slug}>
                    {title}
                  </li>
                </Link>
              )
            })}
          </ul>
          {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
        </div>
      </div>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___title], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
