require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const striptags = require("striptags")

const AlgoliaSearchQuery = `
{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
      }
      fields {
        slug
      }
      html
    }
  }
}
`

const queries = [
  {
    query: AlgoliaSearchQuery,
    transformer: ({ data }) => {
      return data.allMarkdownRemark.nodes.reduce((indices, post) => {
        const pChunks = striptags(post.html, [], "XXX_SPLIT_HERE_XXX").split(
          "XXX_SPLIT_HERE_XXX"
        )

        const chunks = pChunks.map(chnk => ({
          slug: post.fields.slug,
          title: post.frontmatter.title,
          excerpt: chnk,
        }))

        if (post.frontmatter.title) {
          chunks.push({
            slug: post.fields.slug,
            title: post.frontmatter.title,
            excerpt: post.frontmatter.excerpt,
          })
        }

        const filtered = chunks.filter(chnk => !!chnk.excerpt)

        return [...indices, ...filtered]
      }, [])
    },
  },
]
module.exports = {
  siteMetadata: {
    title: "Receptář",
    author: "Tomáš Rajsigl",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
  ],
}
