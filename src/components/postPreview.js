import React from "react"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"

import "./postPreview.css"

const PostPreview = ({ hit }) => {
  return (
    <div className="searchResults">
      <h4>
        <Link to={`/recepty/${hit.slug}`}>
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
      </h4>
      <p>
        <Highlight attribute="excerpt" hit={hit} tagName="mark" />
      </p>
    </div>
  )
}

export default PostPreview
