const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const episode = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `episode`,
      value: episode
    })
  }
}

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const episodes = ['001-setup', '002-clone']
  episodes.forEach(episode => {
    createPage({
      path: episode,
      component: path.resolve(`./src/templates/episode.js`),
      context: {
        episode
      }
    })
  })
}
