import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Converter from "../components/converter"
import "./tools.css"

const BlogPage = () => {
  return (
    <Layout>
      <Head title="tools" />
      <div>
        <Link to="/admin/">
          <button className="login">Přihlásit do CMS</button>
        </Link>
      </div>
      <div className="converter">
        <Converter />
      </div>
    </Layout>
  )
}

export default BlogPage
