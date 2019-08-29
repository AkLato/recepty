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
      <div className="container">
        <div className="tags">
          <Link className="tagText" to="/tags">
            Třídit podle tagů
          </Link>
        </div>
        <div className="converter">
          <Converter />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
