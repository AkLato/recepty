import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Converter from "../components/converter"
import "./recepty.css"

const BlogPage = () => {
  return (
    <Layout>
      <Head title="Recepty" />
      <div className="tags">
        <Link className="tagText" to="/tags">
          Tagy
        </Link>
      </div>
      <Converter />
    </Layout>
  )
}

export default BlogPage
