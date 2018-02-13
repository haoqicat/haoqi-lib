const path = require(`path`)

module.exports = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
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
