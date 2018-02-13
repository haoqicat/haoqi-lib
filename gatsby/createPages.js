const path = require(`path`)

module.exports = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const allTocJson = await graphql(`
    {
      allTocJson {
        edges {
          node {
            fields {
              bookId
            }
          }
        }
      }
    }
  `)

  allTocJson.data.allTocJson.edges.map(({ node }) => {
    const { bookId } = node.fields
    createPage({
      path: bookId,
      component: path.resolve(`./src/templates/book.js`),
      context: {
        bookId
      }
    })
  })
  const allMarkdown = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              episode
            }
          }
        }
      }
    }
  `)
  allMarkdown.data.allMarkdownRemark.edges.map(({ node }) => {
    createPage({
      path: node.fields.episode,
      component: path.resolve(`./src/templates/episode.js`),
      context: {
        episode: node.fields.episode
      }
    })
  })
}
