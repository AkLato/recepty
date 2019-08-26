import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
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
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/recepty"
            >
              Recepty
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/kontakt"
            >
              Kontakt
            </Link>
          </li>
        </ul>
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
        <footer className={headerStyles.footer}>
          <p>
            {data.site.siteMetadata.author}. You can{" "}
            <Link to="/kontakt">hire me!</Link>
          </p>
        </footer>
      </nav>
    </header>
  )
}

export default Header
