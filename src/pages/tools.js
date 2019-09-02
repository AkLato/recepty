import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"
import Converter from "../components/converter"
import Timer from "../components/timer"
import "./tools.css"

const BlogPage = props => {
  return (
    <Layout>
      <Head title="tools" />
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
