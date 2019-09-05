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
        <a href="/admin/" target="_blank">
          <button className="login">Přihlásit do CMS</button>
        </a>
      </div>
      <div className="converter">
        <Converter />
      </div>
    </Layout>
  )
}

export default BlogPage
