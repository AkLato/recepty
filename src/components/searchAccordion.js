import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom"
import PostPreview from "../components/postPreview"

import "./searchAccordion.css"

const searchClient = algoliasearch(
  "YXM5F0K9W4",
  "57317590b2a3a83b0ca40243756c9f4b"
)

const SearchAccordion = () => {
  return (
    <div className="container">
      <div className="accordion">
        <div className="option">
          <input type="checkbox" id="toggle1" className="toggle" />   {" "}
          <label className="title" for="toggle1">
            Hledat...
          </label>
          <div className="content">
            <InstantSearch searchClient={searchClient} indexName="recepty">
              <SearchBox className="searchBox" />
              <Hits hitComponent={PostPreview} />
            </InstantSearch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchAccordion
