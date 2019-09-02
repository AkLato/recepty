import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Converter from "../components/converter"
import Timer from "../components/timer"
import "./tools.css"

const BlogPage = props => {
  return (
    <Layout>
      <Head title="tools" />
      <a href="/admin/">
        <button class="login">Login to Admin Page</button>
      </a>
      <div className="converter">
        <Converter />
      </div>
      <div className="timer">
        <Timer />
      </div>
    </Layout>
  )
}

export default BlogPage
