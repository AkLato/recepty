import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={headerStyles.footer}>
      <p>
        {data.site.siteMetadata.author}. You can{" "}
        <Link to="/kontakt">hire me!</Link>
      </p>
    </footer>
  )
}
export default Footer
