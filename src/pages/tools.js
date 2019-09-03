import React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"

import PostPreview from "../components/postPreview"
import Layout from "../components/layout"
import Head from "../components/head"
import Converter from "../components/converter"
import "./tools.css"

const searchClient = algoliasearch(
  "YXM5F0K9W4",
  "57317590b2a3a83b0ca40243756c9f4b"
)

const BlogPage = props => {
  return (
    <Layout>
      <Head title="tools" />
      <Link to="/admin/">
        <button class="login">Login to Admin Page</button>
      </Link>
      <InstantSearch searchClient={searchClient} indexName="recepty">
        <SearchBox className="searchBox" />

        <Hits className="search" hitComponent={PostPreview} />
      </InstantSearch>

      <div className="converter">
        <Converter />
      </div>
    </Layout>
  )
}

export default BlogPage
