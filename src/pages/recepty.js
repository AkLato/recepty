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
        <Link className="tagText" to="/tags">
          <div className="tags">
            <h3>
              <u>Třídit podle tagů</u>
            </h3>
          </div>
        </Link>
        <div className="converter">
          <Converter />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
