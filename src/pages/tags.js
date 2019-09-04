import React from "react"
import PropTypes from "prop-types"
import "./tags.css"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import Head from "../components/head"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <div className="tagContainer">
      <Head title={title} />

      <div>
        <h1>Tags</h1>
        <ul className="tagGrid">
          {group.map(tag => (
            <Link className="link" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <li className="items" key={tag.fieldValue}>
                {tag.fieldValue} ({tag.totalCount})
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
